const { Schema, model} = require('mongoose');

const RacesSchema = new Schema({
  circuitName: {
    type: String,
    required: true
  },
  raceDate: {
    type: String,
    required: true
  },
  raceWinner: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = model('Races', RacesSchema);