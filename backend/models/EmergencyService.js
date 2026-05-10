import mongoose from 'mongoose';

const emergencyServiceSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  ambulanceFleetSize: {
    type: Number,
    default: 0,
  },
  availableAmbulances: {
    type: Number,
    default: 0,
  },
  serviceTypes: [{
    type: String,
    enum: ['Basic Life Support (BLS)', 'Advanced Life Support (ALS)', 'Neonatal Ambulance', 'Air Ambulance'],
  }],
  emergencyHotline: {
    type: String,
    required: true,
  },
  averageResponseTimeMinutes: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, { timestamps: true });

export default mongoose.model('EmergencyService', emergencyServiceSchema);
