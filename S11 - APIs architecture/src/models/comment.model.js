const { Schema, model } = require('mongoose');

const schema = new Schema({
  comment: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    autopopulate: true
  }
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = model('comment', schema);