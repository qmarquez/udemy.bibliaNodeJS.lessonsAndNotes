const { Router } = require('express');

module.exports = function ({ CommentController }) {
  const router = Router();

  const { create, update, getIdeaComment } = CommentController;

  router.post('/', create);
  router.route('/:id')
    .patch(update)
    .delete(CommentController.delete);
  router.get('/:ideaId', getIdeaComment);

  return router;
}