require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/lembasbreak', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Require our routes
const userRoutes = require('./routes/userRoutes');

// Use our routes
app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🌟 Server is twinkling on port ${PORT} 🌟`);
});