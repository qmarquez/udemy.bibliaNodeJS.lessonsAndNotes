const BaseService = require('./base.service');

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
  }

  async getUserByUsername(username) {
    return await this.repository.getUserByUsername(username);
  }
}

module.exports = UserService;