const { createContainer, asValue, asClass, asFunction } = require('awilix');

const container = createContainer();
const { register } = container;

// MAINS
const app = require('.');
const config = require('../config');
const Routes = require('../routes');
register({
  app: asClass(app).singleton(),
  config: asValue(config),
  router: asFunction(Routes).singleton()
});

// SERVICES
const { HomeService } = require('../services');
register({
  HomeService: asClass(HomeService).singleton()
});

// CONTROLLERS
const { HomeController } = require('../controllers');
register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton()
});

// ROUTES
const { HomeRoutes } = require('../routes/index.routes');
register({
  HomeRoutes: asFunction(HomeRoutes).singleton()
});

module.exports = container;