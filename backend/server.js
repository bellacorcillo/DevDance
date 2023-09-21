const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://isabellacorcillo:Bella121!841!@lembasbreak.kdka9a6.mongodb.net/lembasbreak', {
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
app.use('/api', userRoutes);

// General Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🌟 Server is twinkling on port ${PORT} 🌟`);
});
