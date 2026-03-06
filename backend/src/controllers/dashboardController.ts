import { Request, Response, NextFunction } from 'express';
import Patient from '../models/patientModel';
import Analysis from '../models/analysisModel';
import Report from '../models/reportModel';
import catchAsync from '../utils/catchAsync';

export const getStats = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const [patientCount, analysisCount, recentReports] = await Promise.all([
    Patient.countDocuments(),
    Analysis.countDocuments(),
    Report.find().sort({ createdAt: -1 }).limit(5).populate('patientId')
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      patientCount,
      analysisCount,
      recentReports
    }
  });
});
