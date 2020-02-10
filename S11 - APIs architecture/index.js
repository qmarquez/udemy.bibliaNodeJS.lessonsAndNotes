const container = require('./src/startup/container');
const app = container.resolve('app');

const { MONGO_URI } = container.resolve('config');
const mongoose = require('mongoose');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.start();
  })
  .catch(console.log)
