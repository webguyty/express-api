const mongoose = require('mongoose');

const TechsSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('it-logger-techs', TechsSchema);
