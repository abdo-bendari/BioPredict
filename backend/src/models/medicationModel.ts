import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Medication must have a name'],
    unique: true
  },
  category: String,
  treatmentPurpose: String,
  description: String
});

const Medication = mongoose.model('Medication', medicationSchema);

export default Medication;
