import mongoose from 'mongoose';

const analysisSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
    required: [true, 'Analysis must belong to a patient.']
  },
  medicalImage: {
    type: String,
    required: [true, 'An analysis must have an image.']
  },
  aiPrediction: {
    type: String,
    required: [true, 'An analysis must have a prediction.']
  },
  tumorLocation: {
    x: Number,
    y: Number
  },
  classification: {
    type: String,
    enum: ['benign', 'malignant'],
    required: [true, 'An analysis must have a classification.']
  },
  maxSize: String,
  confidenceScore: {
    type: Number,
    required: [true, 'An analysis must have a confidence score.']
  },
  analysisDate: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Analysis must be created by a user.']
  }
});

const Analysis = mongoose.model('Analysis', analysisSchema);

export default Analysis;
