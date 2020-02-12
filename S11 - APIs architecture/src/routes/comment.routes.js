const { Router } = require('express');

module.exports = function ({ CommentController }) {
  const router = Router();

  router.post('/', CommentController.create);
  router.route('/:id')
    .patch(CommentController.update)
    .delete(CommentController.delete);
  router.get('/:ideaId', CommentController.getIdeaComment);

  return router;
}