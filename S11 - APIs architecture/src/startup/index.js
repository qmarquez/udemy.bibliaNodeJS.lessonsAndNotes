let _express, _config;

class App {

  constructor({ config, router }) {
    _express = require('express')().use(router);
    _config = config;
  }

  async start() {
    await _express.listen(_config.PORT);
    console.log(_config.APPLICATION_NAME + ' API running on port ' + _config.PORT);
  }

}

module.exports = App;