const { mongooseConnect } = require('../lib');
const { Technology } = require('../models');
const tecnologies = require('./technologies.json');

mongooseConnect.doAndDisconnect(async () => {
  await Technology.create(tecnologies);
}).then(() => console.log('Technologies seeds Ok!'))
  .catch(console.log);