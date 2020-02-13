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


// const { createContainer, asValue, asClass, asFunction } = require('awilix');

// const container = createContainer();
// const { register } = container;

// // MAINS
// const app = require('./src/startup');
// const config = require('./src/config');
// const Routes = require('./src/routes/index.routes');
// register({
//   app: asClass(app).singleton(),
//   config: asValue(config),
//   router: asFunction(Routes).singleton()
// });

// console.log(container.registrations)