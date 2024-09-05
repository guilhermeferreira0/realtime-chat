import { Request, Response } from 'express';
import Conversation from '../models/conversationModel';
import Message from '../models/messageModel';
import { getReceiverSockerId, io } from '../socket';

export async function sendMessage(req: Request, res: Response) {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.body.user;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId: senderId.id,
      receiverId: receiverId,
      message,
    });

    if (!newMessage) return res.status(400).json({ error: 'Message Failed!' });

    conversation.messages.push(newMessage._id);
    // this will run ir parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const receiverSocketId = getReceiverSockerId(receiverId);
    if (receiverSocketId) {
      // io.to(<sockect_id>).emit()
      const operator = io.to(receiverSocketId);
      console.log('CHAMOU AQUI');
      operator.emit('newMessage', newMessage);
    }
    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getMessages(req: Request, res: Response) {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.body.user.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate('messages');

    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;

    return res.status(200).json(conversation?.messages);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
