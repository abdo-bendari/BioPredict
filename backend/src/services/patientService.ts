import Patient from '../models/patientModel';

export const findAllPatients = async () => {
  return await Patient.find();
};

export const findPatientById = async (id: string) => {
  return await Patient.findById(id).populate('analyses');
};

export const createNewPatient = async (patientData: any) => {
  return await Patient.create(patientData);
};

export const updatePatientById = async (id: string, updateData: any) => {
  return await Patient.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });
};

export const deletePatientById = async (id: string) => {
  return await Patient.findByIdAndDelete(id);
};
