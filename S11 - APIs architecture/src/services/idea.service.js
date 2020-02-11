const BaseService = require('./base.service');
const DataError = require('../helpers/DataError');

class IdeaService extends BaseService {
  constructor({ IdeaRepository }) {
    super(IdeaRepository);
  }

  async getUserIdeas(author) {
    if (!author) {
      throw new DataError('author must sent', 400);
    }

    return await this.repository.getUserIdeas(author);
  }

  async upvoteIdea(id) {
    if (!id) {
      throw new DataError('id must be sent', 400);
    }

    const idea = this.repository.get(id);

    if (!idea) {
      throw new DataError('idea not found', 404);
    }

    idea.upvotes.push(true);

    return await this.repository.update(id, { upvotes: idea.upvotes });
  }

  async downvoteIdea(id) {
    if (!id) {
      throw new DataError('id must be sent', 400);
    }

    const idea = this.repository.get(id);

    if (!idea) {
      throw new DataError('idea not found', 404);
    }

    idea.downvotes.push(true);

    return await this.repository.downdate(id, { downvotes: idea.downvotes });
  }
}

module.exports = IdeaService;