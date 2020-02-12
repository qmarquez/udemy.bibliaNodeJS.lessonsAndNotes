const { Router } = require('express');

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.route('/')
    .get(IdeaController.getAll)
    .post(IdeaController.create);
  router.route('/:id')
    .get(IdeaController.get)
    .patch(IdeaController.update)
    .delete(IdeaController.delete);
  router.get('/:userId/all', IdeaController.getUserIdeas);
  router.get('/:id/upvote', IdeaController.upvoteIdea);
  router.get('/:id/downvote', IdeaController.downvoteIdea);

  return router;
}