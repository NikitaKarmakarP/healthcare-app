import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();

// Initialize Razorpay
/*
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
*/

export const createOrder = async (req, res) => {
  try {
    const { amount, currency = "INR", receipt = "receipt_01" } = req.body;

    /* 
    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency,
      receipt
    };
    
    const order = await razorpay.orders.create(options);
    res.json({ success: true, order });
    */

    // Mock response
    res.json({
      success: true,
      order: {
        id: "order_" + Math.random().toString(36).substring(7),
        amount: amount * 100,
        currency: "INR"
      }
    });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
