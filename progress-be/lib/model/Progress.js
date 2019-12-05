const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  progress: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  }
});

module.exports = mongoose.model('Progress', schema);
