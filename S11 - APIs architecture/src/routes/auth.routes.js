const { Router } = require('express');

module.exports = function ({ AuthController }) {
  const router = Router();

  const { signUp, signIn } = AuthController;

  router.post('/signup', signUp);
  router.post('/signin', signIn);

  return router;
}