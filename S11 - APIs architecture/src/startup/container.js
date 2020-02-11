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

register({
  // SERVICES
  ...mapImports(require('../services'), service => asClass(service).singleton()),

  // CONTROLLERS
  ...mapImports(require('../controllers'), controller => asClass(controller.bind(controller)).singleton()),

  // ROUTES
  ...mapImports(require('../routes/index.routes'), route => asFunction(route).singleton()),

  // REPOSITORIES
  ...mapImports(require('../models'), repository => asClass(repository).singleton()),

  // MODELS
  ...mapImports(require('../models'), model => asValue(model))
});


module.exports = container;

function mapImports(imports, mapper) {
  Object.keys(imports).forEach(key => imports[key] = mapper(imports[key]));
  return imports;
}