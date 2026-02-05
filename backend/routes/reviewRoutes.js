const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

// Get approved reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit review
router.post('/', async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    const review = new Review({ name, rating, comment });
    await review.save();
    res.status(201).json({ message: 'Review submitted for approval!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Approve review (admin)
router.put('/:id/approve', async (req, res) => {
  try {
    await Review.findByIdAndUpdate(req.params.id, { isApproved: true });
    res.json({ message: 'Review approved' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;