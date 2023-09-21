const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Require our user routes
const userRoutes = require('./routes/userRoutes');


const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/lembasbreak', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use our user routes
app.use(userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🌟 Server is twinkling on port ${PORT} 🌟`);
});