module.exports = function (req, res, next) {
  const qs = req.query;
  for (const key in qs) {
    const parsedNumber = parsedInt(qs[key]);
    if (!isNaN(parsedNumber)) {
      qs[key] = parsedNumber;
    }
  }

  req.query = qs;
  next();
}