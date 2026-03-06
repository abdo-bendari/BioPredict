import { Request, Response, NextFunction } from 'express';
import Analysis from '../models/analysisModel';
import Patient from '../models/patientModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/AppError';

export const createAnalysis = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  if (!req.file) return next(new AppError('Please upload a medical image', 400));

  const analysisData = {
    ...req.body,
    medicalImage: req.file.filename,
    createdBy: req.user._id,
    tumorLocation: req.body.tumorLocation ? JSON.parse(req.body.tumorLocation) : undefined
  };

  const newAnalysis = await Analysis.create(analysisData);

  // Add analysis to patient's analyses array
  await Patient.findByIdAndUpdate(req.body.patientId, {
    $push: { analyses: newAnalysis._id }
  });

  res.status(201).json({
    status: 'success',
    data: {
      analysis: newAnalysis
    }
  });
});

export const getAllAnalyses = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const analyses = await Analysis.find();

  res.status(200).json({
    status: 'success',
    results: analyses.length,
    data: {
      analyses
    }
  });
});

export const getAnalysis = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const analysis = await Analysis.findById(req.params.id).populate('patientId');

  if (!analysis) {
    return next(new AppError('No analysis found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      analysis
    }
  });
});
