module.exports = class BaseController {
  constructor(service) {
    this.service = service;
  }

  get = async (req, res) => {
    const { id } = req.params;
    const entity = await this.service.get(id);

    return res.send(entity);
  }

  update = async (req, res) => {
    const { body, params: { id } } = req;

    const entity = await this.service.update(id, body);

    return res.send(entity);
  }

  delete = async (req, res) => {
    const { id } = req.params;
    const deleted = this.service.delete(id);
    return res.send(deleted);
  }
}
