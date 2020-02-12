const GetAllController = require('./base.get_all.controller');

module.exports = class IdeaController extends GetAllController {
  constructor({ IdeaService }) {
    super(IdeaService);
  }

  create = async (req, res) => {
    const { body } = req;
    const idea = this.service.create(body);
    return res.status(201).send(idea);
  }

  getUserIDeas = async (req, res) => {
    const { userId } = req.params

    const ideas = await this.service.getUserIdeas(userId);
    return res.send(ideas);
  }

  upvoteIdea = async (req, res) => {
    const { id } = req.param;
    const idea = await this.service.upvoteIdea(id);
    return res.send(idea);
  }

  downvoteIdea = async (req, res) => {
    const { id } = req.param;
    const idea = await this.service.downvoteIdea(id);
    return res.send(idea);
  }
}
