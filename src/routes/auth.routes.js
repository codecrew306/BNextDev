import express from 'express';
import * as authController from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/login', authController.getLogin);
router.get('/profile', authController.getProfile);
router.post('/login', authController.postLogin);

export default router;
