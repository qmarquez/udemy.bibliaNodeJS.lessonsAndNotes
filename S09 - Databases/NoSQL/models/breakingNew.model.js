const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  title: String,
  link: String
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
});

module.exports = mongoose.model('BreakingNews', schema);