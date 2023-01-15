const { Schema, model} = require('mongoose');

const DriversSchema = new Schema({
  driverName: {
    type: String,
    required: true
  },
  driverBirth: {
    type: String,
    required: true
  },
  driverCountry: {
    type: String,
    required: true
  },
  driverTeam: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

module.exports = model('Drivers', DriversSchema);