const express = require('express');
const router = express.Router();
const Stats = require('../models/stats');
const auth = require('../middleware/auth');

router.get('/stats', async (req, res) => {
  try {
    const userStats = await Stats.findOne({ user: req.user.id });

    if (!userStats) {
      return res.status(404).json({ message: 'User stats not found' });
    }

    return res.json(userStats);
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const stats = await Stats.findOne({ user: req.user.id });
    if (!stats) {
      return res.status(400).json({ msg: 'There are no stats for this user' });
    }
    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
