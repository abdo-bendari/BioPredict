import express from 'express';
import * as medicationController from '../controllers/medicationController';
import * as authController from '../controllers/authController';

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(medicationController.searchMedications)
  .post(authController.restrictTo('admin'), medicationController.createMedication);

export default router;
