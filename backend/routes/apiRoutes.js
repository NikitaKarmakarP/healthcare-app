import express from 'express';
import { analyzeSymptoms } from '../controllers/aiController.js';
import { createOrder } from '../controllers/paymentController.js';

const router = express.Router();

// AI Assistant Route
router.post('/ai/analyze', analyzeSymptoms);

// Payment Gateway Route (e.g., Razorpay)
router.post('/payment/create-order', createOrder);

// Google Maps / Location API Route Placeholder
router.get('/location/nearby-hospitals', (req, res) => {
  // Use GOOGLE_MAPS_API_KEY to fetch from Google Places API
  res.json({
    success: true,
    message: 'Integration point for Google Maps Places API (Nearby Hospitals)',
    data: []
  });
});

// Video Call Token Generation Route Placeholder
router.get('/video/generate-token', (req, res) => {
  // Use VIDEO_CALL_APP_ID to generate token (e.g. Agora, Twilio)
  res.json({
    success: true,
    message: 'Integration point for Video Call API token generation',
    token: 'mock_video_token_123'
  });
});

// Doctors / Appointments Routes (Placeholders)
router.get('/doctors', (req, res) => {
  res.json({ success: true, message: 'Fetch doctors from MongoDB' });
});

router.post('/appointments', (req, res) => {
  res.json({ success: true, message: 'Create appointment in MongoDB' });
});

export default router;
