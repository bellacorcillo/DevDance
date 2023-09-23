const express = require('express');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/create-account', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'An account with this email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'Account created successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

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
    console.error(error);
    res.status(500).json({ message: 'Oops! Something went wrong.', error: error.message });
  }
});

router.get('/data/seed', async (req, res) => {
  const seedUsers = [
    { username: 'sampleUser', email: 'sample@email.com', password: 'hashedPasswordHere' },
  ];

  try {
    for (let user of seedUsers) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    await User.insertMany(seedUsers);
    res.status(201).json({ message: 'Seed data inserted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

module.exports = router;

