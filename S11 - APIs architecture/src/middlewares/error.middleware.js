module.exports = (err, req, res, next) => {
  const httpStatus = err.status || 500;
  res.status(httpStatus).send({
    status: httpStatus,
    message: err.message || 'Internal server error.'
  });
}