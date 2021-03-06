const BaseService = require('./base.service');

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository, errors: { DataError } }) {
    super(CommentRepository);
    this.IdeaRepository = IdeaRepository;
    this.DataError = DataError;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      throw new this.DataError('ideaId must be sent.', 400);
    }

    const idea = await this.IdeaRepository.get(ideaId);

    if (!idea) {
      throw new this.DataError('idea not found', 404);
    }

    return idea.comments;
  }

  async createComment(comment, ideaId) {
    if (!ideaId) {
      throw new this.DataError('ideaId must be sent.', 400);
    }

    const idea = await this.IdeaRepository.get(ideaId);

    if (!idea) {
      throw new this.DataError('idea not found', 404);
    }

    const commentCreated = await this.repository.create(comment);
    idea.comments.push(commentCreated);

    return await this.IdeaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;