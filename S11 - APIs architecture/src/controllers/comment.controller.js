const BaseController = require('./base.controller');

module.exports = class CommentController extends BaseController {
  constructor({ CommentService }) {
    super(CommentService)
  }

  getIdeaComment = async (req, res) => {
    const { ideaId } = req.params;
    const comments = this.service.getIdeasComments(ideaId);
    return res.send(comments);
  }

  create = async (req, res) => {
    const { body, params: { ideaId } } = req;
    const createdComment = await this.service.createComment(body, ideaId);
    return res.status(201).send(createdComment);
  }
}
