const BaseRepository = require('./base.repository');

class IdeaRepository extends BaseRepository {
  constructor({ Idea }) {
    super(Idea)
  }

  async getUserIdeas(author) {
    return await this.model.find({ author });
  }
}

module.exports = IdeaRepository;