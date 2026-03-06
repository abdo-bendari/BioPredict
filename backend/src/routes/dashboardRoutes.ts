import express from 'express';
import * as dashboardController from '../controllers/dashboardController';
import * as authController from '../controllers/authController';

const router = express.Router();

router.use(authController.protect);

router.get('/stats', dashboardController.getStats);

export default router;
