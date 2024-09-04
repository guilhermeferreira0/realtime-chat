import { Router } from 'express';
import { protectRouter } from '../middleware/protectRoute';
import { getUsersForSidebar } from '../controllers/userController';

const router = Router();

router.get('/', protectRouter, getUsersForSidebar);

export default router;
