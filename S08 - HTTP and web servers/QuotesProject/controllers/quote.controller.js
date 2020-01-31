const path = require('path');
const DB_PATH = path.join(__dirname, '..', 'data', 'mock_db.json');
const fs = require('fs');
const db = require(DB_PATH);
const render = require('./lib/render');

class Controller {
  async index(req, res) {
    return render('quotes', res);
  }

  async get(req, res) {
    return res.send(db);
  }

  async add(req, res) {
    const { body: quote } = req;
    const { id } = db[db.length - 1];
    quote.id = id + 1;
    db.push(quote);
    fs.writeFileSync(DB_PATH, JSON.stringify(db));
    return res.sendStatus(201);
  }
}

module.exports = new Controller;