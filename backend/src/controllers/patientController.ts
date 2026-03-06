import { Request, Response, NextFunction } from 'express';
import Patient from '../models/patientModel';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/AppError';

export const getAllPatients = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const patients = await Patient.find();

  res.status(200).json({
    status: 'success',
    results: patients.length,
    data: {
      patients
    }
  });
});

export const getPatient = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const patient = await Patient.findById(req.params.id).populate('analyses');

  if (!patient) {
    return next(new AppError('No patient found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      patient
    }
  });
});

export const createPatient = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const newPatient = await Patient.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      patient: newPatient
    }
  });
});

export const updatePatient = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!patient) {
    return next(new AppError('No patient found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      patient
    }
  });
});

export const deletePatient = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const patient = await Patient.findByIdAndDelete(req.params.id);

  if (!patient) {
    return next(new AppError('No patient found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
