const express = require('express');
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const router = express.Router();

// Transporter for email
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// Twilio for WhatsApp
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// Create booking
router.post('/', async (req, res) => {
  try {
    const { name, phone, eventType, date, location, budget, month, additionalNotes } = req.body;
    const booking = new Booking({ name, phone, eventType, date, location, budget, month, additionalNotes });
    await booking.save();

    // Send email notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'admin@tagliwe.com',
      subject: 'New Booking',
      text: `New booking: ${name} for ${eventType} on ${date}`,
    });

    // Send WhatsApp (or use link in frontend)
    await twilioClient.messages.create({
      from: 'whatsapp:+1234567890', // Your Twilio WhatsApp number
      to: `whatsapp:${phone}`,
      body: `Booking confirmed for ${eventType} on ${date}. We'll contact you soon!`,
    });

    res.status(201).json({ message: 'Booking submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get bookings (for admin)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;