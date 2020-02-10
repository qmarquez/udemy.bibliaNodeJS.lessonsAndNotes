const { Schema, model } = require('mongoose');

const schema = new Schema({
  idea: { type: String, required: true },
  description: String,
  upVotes: [Boolean],
  downVotes: [Boolean],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    autopopulate: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comment',
    required: true,
    autopopulate: true
  }]
});

schema.plugin(require('mongoose-autopopulate'));

module.exports = model('idea', schema);