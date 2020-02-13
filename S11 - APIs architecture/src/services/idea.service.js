const BaseService = require('./base.service');

class IdeaService extends BaseService {
  constructor({ IdeaRepository, errors: { DataError } }) {
    super(IdeaRepository);
    this.DataError = DataError;
  }

  async getUserIdeas(author) {
    if (!author) {
      throw new this.DataError('author must sent', 400);
    }

    return await this.repository.getUserIdeas(author);
  }

  async upvoteIdea(id) {
    if (!id) {
      throw new this.DataError('id must be sent', 400);
    }

    const idea = this.repository.get(id);

    if (!idea) {
      throw new this.DataError('idea not found', 404);
    }

    idea.upvotes.push(true);

    return await this.repository.update(id, { upvotes: idea.upvotes });
  }

  async downvoteIdea(id) {
    if (!id) {
      throw new this.DataError('id must be sent', 400);
    }

    const idea = this.repository.get(id);

    if (!idea) {
      throw new this.DataError('idea not found', 404);
    }

    idea.downvotes.push(true);

    return await this.repository.downdate(id, { downvotes: idea.downvotes });
  }
}

module.exports = IdeaService;