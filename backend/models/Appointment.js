import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['In-Person', 'Video Consultation'],
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled', 'No-Show'],
    default: 'Pending',
  },
  paymentStatus: {
    type: String,
    enum: ['Unpaid', 'Paid', 'Refunded'],
    default: 'Unpaid',
  },
  consultationNotes: {
    type: String,
  },
  prescriptionUrl: {
    type: String,
  }
}, { timestamps: true });

export default mongoose.model('Appointment', appointmentSchema);
