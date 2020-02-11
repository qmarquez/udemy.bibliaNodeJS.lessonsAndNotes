const DataError = require('../helpers/DataError');

class BaseService {

  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      throw new DataError('id must be sent', 400);
    }

    const currentEntity = await this.repository.get(id);

    if (!currentEntity) {
      throw new DataError('entity does not found.', 404);
    }

    return currentEntity;
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async create(entity) {
    return await this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      throw new DataError('id must be sent', 400);
    }

    return await this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      throw new DataError('id must be sent', 400);
    }

    return await this.repository.delete(id);
  }

}

module.exports = BaseService