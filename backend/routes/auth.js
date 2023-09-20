const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  // Register logic here
});

router.post('/login', async (req, res) => {
  // Login logic here
});

module.exports = router;
