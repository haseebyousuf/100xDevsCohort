import express from 'express';
import { signin, signup, updateUser } from '../controllers/user.controllers.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);

router.put('/', authMiddleware, updateUser);

export default router;
