const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

async function up() {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
async function down() {
  await mongoose.disconnect();
}
async function doAndDisconnect(action) {
  await up();
  await action();
  await down();
}
module.exports = { up, down, doAndDisconnect }