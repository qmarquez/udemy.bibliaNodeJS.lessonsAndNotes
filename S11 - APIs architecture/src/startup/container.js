const { createContainer, asValue, asClass, asFunction } = require('awilix');

const container = createContainer();
const { register } = container;

// MAINS
const app = require('.');
const config = require('../config');
const Routes = require('../routes/index.routes');
register({
  app: asClass(app).singleton(),
  config: asValue(config),
  router: asFunction(Routes).singleton()
});

register({
  // REPOSITORIES
  ...mapImports(require('../repositories'), repository => asClass(repository).singleton()),

  // SERVICES
  ...mapImports(require('../services'), service => asClass(service).singleton()),

  // CONTROLLERS
  ...mapImports(require('../controllers'), controller => asClass(controller.bind(controller)).singleton()),

  // ROUTES
  ...mapImports(require('../routes'), route => asFunction(route).singleton()),

  // MODELS
  ...mapImports(require('../models'), model => asValue(model))
});

function mapImports(imports, mapper) {
  return Object.keys(imports).reduce(
    (acc, key) => ({ ...acc, [key]: mapper(imports[key]) }),
    imports
  );
}

module.exports = container;