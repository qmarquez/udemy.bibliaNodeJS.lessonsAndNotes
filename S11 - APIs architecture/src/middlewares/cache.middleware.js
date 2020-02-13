const mcache = require('memory-cache');
const { CACHE_KEY } = require("../config");

module.exports = (duration) => (req, res, next) => {
  console.log(req.originalUrl || req.url);
  const key = CACHE_KEY + req.originalUrl || req.url;
  const cachedBody = mcache.get(key);

  if (cachedBody) {
    return res.send(JSON.parse(cachedBody))
  } else {
    res.sendResponse = res.send();
    res.send = body => {
      mcache.put(key, body, duration * 100);
      res.sendResponse(body);
    }
    next();
  }
}
