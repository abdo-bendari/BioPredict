import express from 'express';
import * as analysisController from '../controllers/analysisController';
import * as authController from '../controllers/authController';
import upload from '../config/multer';

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(analysisController.getAllAnalyses)
  .post(upload.single('medicalImage'), analysisController.createAnalysis);

router
  .route('/:id')
  .get(analysisController.getAnalysis);

export default router;
