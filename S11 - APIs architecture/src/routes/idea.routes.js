const { Router } = require('express');

module.exports = function ({ IdeaController }) {
  const router = Router();

  const {
    getAll,
    create,
    get,
    update,
    getUserIdeas,
    upvoteIdea,
    downvoteIdea
  } = IdeaController

  router.route('/')
    .get(getAll)
    .post(create);
  router.route('/:id')
    .get(get)
    .patch(update)
    .delete(IdeaController.delete);
  router.get('/:userId/all', getUserIdeas);
  router.get('/:id/upvote', upvoteIdea);
  router.get('/:id/downvote', downvoteIdea);

  return router;
}