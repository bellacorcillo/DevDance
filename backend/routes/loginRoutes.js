const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('../models/Users');

// Logging function for debugging
const logRequest = (req) => {
    console.log(`Received request: ${req.method} ${req.url}`);
};

// Login Route
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').not().isEmpty()
], async (req, res) => {
    // Log the request
    logRequest(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        // Generate and sign a JWT
        const payload = {
            user: {
                id: user.id,
            },
        };

        jwt.sign(
            payload,
            '82280f0c508076773ed3d8ab1cf6b6fd9b4cf4b25ebec9d0c8677f70fca1319b',
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
