const { env } = process;

if (env.NODE_ENV !== 'production') {
  const path = require('path').join(__dirname, '..', '..', '.env');
  require('dotenv').config({ path });
}

module.exports = {
  PORT: env.PORT,
  MONGO_URI: env.MONGO_URI,
  APPLICATION_NAME: env.APPLICATION_NAME,
  JWT_SECRET: env.JWT_SECRET,
  CACHE_KEY: env.CACHE_KEY
}
