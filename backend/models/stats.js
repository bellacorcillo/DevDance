const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'stats',
  },
  totalPomodoros: {
    type: Number,
    required: true,
  },
  totalBreaks: {
    type: Number,
    required: true,
  },
  longestStreak: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Stats', statsSchema);


