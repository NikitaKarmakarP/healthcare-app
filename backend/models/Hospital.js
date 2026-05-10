import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['Hospital', 'Clinic', 'Diagnostic Center', 'Pharmacy', 'Multispecialty Hospital', 'Super Specialty Hospital'],
    required: true,
  },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    address: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    }
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  specialties: [{
    type: String,
  }],
  facilities: {
    hasEmergency: { type: Boolean, default: false },
    hasPharmacy: { type: Boolean, default: false },
    hasAmbulance: { type: Boolean, default: false },
  },
  beds: {
    totalBeds: { type: Number, default: 0 },
    icuBedsTotal: { type: Number, default: 0 },
    icuBedsAvailable: { type: Number, default: 0 },
  },
  contact: {
    phone: { type: String },
    ambulancePhone: { type: String },
    email: { type: String },
  },
  imageUrl: {
    type: String,
  }
}, { timestamps: true });

// Create a 2dsphere index for geolocation search "Find Nearby"
hospitalSchema.index({ 'location.coordinates': '2dsphere' });

export default mongoose.model('Hospital', hospitalSchema);
