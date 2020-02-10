const { Schema, model } = require('mongoose');
const { compareSync, hashSync, genSaltSync } = require('bcrypt');

const schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

schema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    return next();
  }
  const salt = genSaltSync(10);
  user.password = hashSync(user.password, salt);
  next();
});

schema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
}

schema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
}

module.exports = model('user', schema);