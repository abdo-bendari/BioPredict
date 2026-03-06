import { Request, Response, NextFunction } from 'express';
import Report from '../models/reportModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/AppError';

export const createReport = catchAsync(async (req: any, res: Response, next: NextFunction) => {
  const newReport = await Report.create({
    ...req.body,
    createdBy: req.user._id
  });

  res.status(201).json({
    status: 'success',
    data: {
      report: newReport
    }
  });
});

export const getAllReports = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const reports = await Report.find().populate('analysisId patientId');

  res.status(200).json({
    status: 'success',
    results: reports.length,
    data: {
      reports
    }
  });
});

export const getReport = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const report = await Report.findById(req.params.id).populate('analysisId patientId');

  if (!report) {
    return next(new AppError('No report found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      report
    }
  });
});
