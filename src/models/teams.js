const { Schema, model} = require('mongoose');

const TeamsSchema = new Schema({
  teamName: {
    type: String,
    required: true
  },
  teamCountry: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = model('Teams', TeamsSchema);