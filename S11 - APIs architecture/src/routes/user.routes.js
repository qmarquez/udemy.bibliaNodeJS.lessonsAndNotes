const { Router } = require('express');
const { authMiddleware } = require('../middlewares');

module.exports = function ({ UserController }) {
  const router = Router();

  router.get('/', authMiddleware, UserController.getAll);
  router.route('/:id')
    .get(UserController.get)
    .patch(UserController.update)
    .delete(UserController.delete);

  return router;
}