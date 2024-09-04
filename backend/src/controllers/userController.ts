import { Request, Response } from 'express';
import User from '../models/userModel';

export async function getUsersForSidebar(req: Request, res: Response) {
  try {
    const loggedUserId = req.body.user.id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedUserId },
    }).select('-password');
    return res.status(200).json({ data: filteredUsers });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
