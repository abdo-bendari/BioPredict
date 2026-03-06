import express from 'express';
import * as reportController from '../controllers/reportController';
import * as authController from '../controllers/authController';

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(reportController.getAllReports)
  .post(reportController.createReport);

router
  .route('/:id')
  .get(reportController.getReport);

export default router;
