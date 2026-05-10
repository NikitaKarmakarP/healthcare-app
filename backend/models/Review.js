import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // Can be either a Hospital ID or Doctor ID
  },
  entityType: {
    type: String,
    enum: ['Hospital', 'Doctor'],
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
  helpfulVotes: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

// Prevent a user from leaving multiple reviews for the same entity
reviewSchema.index({ userId: 1, entityId: 1, entityType: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);
