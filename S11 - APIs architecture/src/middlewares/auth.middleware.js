const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    const error = new Error('authorization header must be sent.');
    error.status = 400;
    throw error;
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      const error = new Error('Wront token.');
      error.status = 401;
      throw error;
    }

    req.user = decodedToken.user;
    next();
  });
}