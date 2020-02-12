require('express-async-errors');
const express = require('express');
const {
  notFoundMiddleware,
  errorMiddleware
} = require('../middlewares');

module.exports = function ({
  HomeRoutes,
  UserRoutes,
  IdeaRoutes,
  CommentRoutes
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(require('cors')())
    .use(require('helmet')())
    .use(require('compression')());

  apiRoutes
    .use('/home', HomeRoutes)
    .use('/user', UserRoutes)
    .use('/idea', IdeaRoutes)
    .use('/comment', CommentRoutes);

  router
    .use('/v1/api', apiRoutes);

  router
    .use(notFoundMiddleware)
    .use(errorMiddleware);

  return router;
}