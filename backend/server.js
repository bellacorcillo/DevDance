const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://isabellacorcillo:Bella121!841!@lembasbreak.kdka9a6.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully! 🎉');
})
.catch(err => {
  console.error('MongoDB connection error: ', err);
});

// User Routes
app.use(userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🌟 Server is twinkling on port ${PORT} 🌟`);
});
