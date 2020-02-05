const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');
async function up() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
}
async function down() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
}
async function doAndDisconnect(action) {
  try {
    await up();
    await action();
    await down();
  } catch (error) {
    console.log(error);
  }
}
module.exports = { up, down, doAndDisconnect }