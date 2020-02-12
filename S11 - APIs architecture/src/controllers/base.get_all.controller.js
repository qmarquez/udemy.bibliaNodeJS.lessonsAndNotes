const BaseController = require('./base.controller');

module.exports = class GetAllController extends BaseController {
  getAll = async (req, res) => {
    const entities = await this.service.getAll();
    return res.send(entities);
  }
}
