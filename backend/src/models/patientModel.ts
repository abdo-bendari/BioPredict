import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A patient must have a name'],
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'A patient must have an age']
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: [true, 'A patient must have a gender']
  },
  medicalHistory: [String],
  medications: [String],
  analyses: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Analysis'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
