import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  analysisId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Analysis',
    required: [true, 'Report must belong to an analysis.']
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Patient',
    required: [true, 'Report must belong to a patient.']
  },
  doctorNotes: String,
  summary: {
    type: String,
    required: [true, 'Report must have a summary.']
  },
  riskLevel: {
    type: String,
    enum: ['low', 'moderate', 'high'],
    required: [true, 'Report must have a risk level.']
  },
  recommendations: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Report must be created by a user.']
  }
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
