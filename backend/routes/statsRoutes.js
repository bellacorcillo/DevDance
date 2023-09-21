const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const Stats = require('../models/Stats');

// Logging function for debugging
const logRequest = (req) => {
    console.log(`Received request: ${req.method} ${req.url}`);
};

// @route   POST api/stats
// @desc    Create or Update user's stats
// @access  Private
router.post('/', [auth, [
    check('pomodoros', 'Pomodoro count is required and should be an integer').isInt(),
    check('breaks', 'Break count is required and should be an integer').isInt()
]], async (req, res) => {
    // Log the request
    logRequest(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pomodoros, breaks } = req.body;

    try {
        let stats = await Stats.findOne({ user: req.user.id });

        if (!stats) {
            // If no stats for the user, create new
            stats = new Stats({
                user: req.user.id,
                pomodoros,
                breaks
            });
        } else {
            // If stats exist, update the stats
            stats.pomodoros += pomodoros;
            stats.breaks += breaks;
        }

        await stats.save();
        res.json(stats);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/stats
// @desc    Get user's stats
// @access  Private
router.get('/', auth, async (req, res) => {
    // Log the request
    logRequest(req);

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
