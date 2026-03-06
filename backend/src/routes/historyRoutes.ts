import express from 'express';
import { getUserHistory } from '../middlewares/historyMiddleware';
import * as authController from '../controllers/authController';

const router = express.Router();

router.use(authController.protect);
router.get('/', getUserHistory);

export default router;
