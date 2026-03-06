import { Request, Response, NextFunction } from 'express';
import Medication from '../models/medicationModel';
import catchAsync from '../utils/catchAsync';

export const searchMedications = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { name, category, treatmentPurpose } = req.query;
  const query: any = {};

  if (name) query.name = { $regex: name, $options: 'i' };
  if (category) query.category = { $regex: category, $options: 'i' };
  if (treatmentPurpose) query.treatmentPurpose = { $regex: treatmentPurpose, $options: 'i' };

  const medications = await Medication.find(query);

  res.status(200).json({
    status: 'success',
    results: medications.length,
    data: {
      medications
    }
  });
});

export const createMedication = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const newMedication = await Medication.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      medication: newMedication
    }
  });
});
