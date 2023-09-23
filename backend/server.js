require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const createaccountRoutes = require('./routes/createaccountRoutes');
const loginRoutes = require('./routes/loginRoutes');
const statsRoutes = require('./routes/statsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully! 🎉');
})
.catch(err => {
  console.error('MongoDB connection error: ', err);
});

app.get('/', (req, res) => {
  res.send('Server is up and running! 🌟');
});

app.use('/users', userRoutes);
app.use('/createaccount', createaccountRoutes);
app.use('/login', loginRoutes);
app.use('/stats', statsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`🌟 Server is twinkling on port ${PORT} 🌟`);
});
