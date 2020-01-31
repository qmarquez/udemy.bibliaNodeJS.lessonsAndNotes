const render = require('./lib/render');

class Controller {
  async index(req, res) {
    return render('home', res);
  }
  async about(req, res) {
    return render('about', res);
  }
}

module.exports = new Controller;