const { Router } = require('express');

module.exports = function ({ UserController }) {
  const router = Router();

  const {
    getAll, get, update
  } = UserController;

  router.get('/', getAll);
  router.route('/:id')
    .get(get)
    .patch(update)
    .delete(UserController.delete);

  return router;
}