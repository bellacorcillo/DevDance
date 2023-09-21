const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register a new user
router.post('/register', (req, res) => {
    // Logic for user registration
});

// User login
router.post('/login', (req, res) => {
    // Logic for user login
});

module.exports = router;

