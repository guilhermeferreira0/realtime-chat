import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/messageController';
import { protectRouter } from '../middleware/protectRoute';

const router = Router();

router.post('/send/:id', protectRouter, sendMessage);
router.get('/:id', protectRouter, getMessages);

export default router;
