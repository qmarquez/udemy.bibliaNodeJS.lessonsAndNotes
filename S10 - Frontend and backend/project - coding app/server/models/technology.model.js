const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, maxlength: 50 },
  description: String,
  logo: String,
  tags: [{ type: String }]
}, { timestamps: true });

module.exports = model('Technology', schema);