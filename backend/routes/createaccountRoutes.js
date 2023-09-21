const express = require('express');
const User = require('./models/Users');
const bcrypt = require('bcryptjs');

// Create a Router object
const router = express.Router();

// Route to create a new account
router.post('/create-account', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'Account created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Oops! Something went wrong.' });
  }
});

// Route to login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    res.status(200).json({ message: 'Logged in successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Oops! Something went wrong.' });
  }
});

module.exports = router;
