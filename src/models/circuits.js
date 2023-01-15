const { Schema, model } = require('mongoose');

const CircuitsSchema = new Schema({
  circuitName: {
    type: String,
    required: true
  },
  circuitCountry: {
    type: String,
    required: true
  },
  circuitCity: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = model('Circuits', CircuitsSchema);