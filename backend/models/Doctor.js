import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experienceYears: {
    type: Number,
    required: true,
  },
  qualifications: [{
    type: String,
  }],
  consultationFee: {
    type: Number,
    required: true,
  },
  availability: [{
    day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
    startTime: { type: String }, // e.g., "09:00 AM"
    endTime: { type: String },
  }],
  rating: {
    type: Number,
    default: 0,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  isAvailableForTelemedicine: {
    type: Boolean,
    default: false,
  },
  imageUrl: {
    type: String,
  }
}, { timestamps: true });

export default mongoose.model('Doctor', doctorSchema);
