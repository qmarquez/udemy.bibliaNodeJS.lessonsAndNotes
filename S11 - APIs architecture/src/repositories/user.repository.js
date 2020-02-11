const BaseRepository = require('./base.repository');

class UserRepository extends BaseRepository {
  constructor({ User }) {
    super(User)
  }

  async getUserByUsername(username) {
    return await this.model.findOne({ username });
  }
}

module.exports = UserRepository;