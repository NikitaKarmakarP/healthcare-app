import express from 'express';
import Hospital from '../models/Hospital.js';

const router = express.Router();

// GET all hospitals with optional filtering (city, state, specialty, emergency)
router.get('/', async (req, res) => {
  try {
    const { city, state, specialty, hasEmergency, type } = req.query;
    let query = {};

    if (city) query['location.city'] = { $regex: new RegExp(city, 'i') };
    if (state) query['location.state'] = { $regex: new RegExp(state, 'i') };
    if (specialty) query.specialties = { $in: [specialty] };
    if (hasEmergency) query['facilities.hasEmergency'] = true;
    if (type) query.type = type;

    const hospitals = await Hospital.find(query).limit(50);
    res.json({ success: true, count: hospitals.length, data: hospitals });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error fetching hospitals' });
  }
});

// GET nearby hospitals based on lat/lng (Mock implementation for Google Places API fallback)
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lng, radius = 10000 } = req.query; // radius in meters

    if (!lat || !lng) {
      return res.status(400).json({ success: false, message: 'Please provide lat and lng coordinates' });
    }

    // This requires MongoDB Geospatial index setup in production
    const hospitals = await Hospital.find({
      'location.coordinates': {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lng), parseFloat(lat)]
          },
          $maxDistance: parseInt(radius)
        }
      }
    });

    res.json({ success: true, count: hospitals.length, data: hospitals });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error finding nearby hospitals' });
  }
});

// GET specific hospital details
router.get('/:id', async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ success: false, message: 'Hospital not found' });
    }
    res.json({ success: true, data: hospital });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error fetching hospital details' });
  }
});

export default router;
