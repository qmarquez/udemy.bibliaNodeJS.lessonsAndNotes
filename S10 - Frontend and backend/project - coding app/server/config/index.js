if (process.env.NODE_ENV !== 'production') {
  const path = require('path').join(__dirname, '..', '.env')
  require('dotenv').config({ path });
}

const { env } = process;

module.exports = {
  PORT: env.PORT,
  MONGO_URI: env.MONGO_URI
}