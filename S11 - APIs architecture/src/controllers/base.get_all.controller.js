const BaseController = require('./base.controller');

module.exports = class GetAllController extends BaseController {
  getAll = async (req, res) => {
    const { pageSize, pageNum } = req.query;

    const entities = await this.service.getAll(pageSize, pageNum);
    return res.send(entities);
  }
}
