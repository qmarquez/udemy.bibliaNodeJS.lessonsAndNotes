const BaseService = require('./base.service');
const DataError = require('../helpers/DataError');

class CommentService extends BaseService {
  constructor({ CommentRepository, IdeaRepository }) {
    super(CommentRepository);
    this.IdeaRepository = IdeaRepository;
  }

  async getIdeaComments(ideaId) {
    if (!ideaId) {
      throw new DataError('ideaId must be sent.', 400);
    }

    const idea = await this.IdeaRepository.get(ideaId);

    if (!idea) {
      throw new DataError('idea not found', 404);
    }

    return idea.comments;
  }

  async createComent(comment, ideaId) {
    if (!ideaId) {
      throw new DataError('ideaId must be sent.', 400);
    }

    const idea = await this.IdeaRepository.get(ideaId);

    if (!idea) {
      throw new DataError('idea not found', 404);
    }

    const commentCreated = await this.repository.create(comment);
    idea.comments.push(commentCreated);

    return await this.IdeaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;