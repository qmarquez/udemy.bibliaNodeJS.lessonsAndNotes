const { Router } = require('express');

module.exports = function ({ UserController }) {
  const router = Router();

  router.get('/', UserController.getAll);
  router.route('/:id')
    .get(UserController.get)
    .patch(UserController.update)
    .delete(UserController.delete);

  return router;
}