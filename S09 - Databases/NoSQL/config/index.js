if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/../.env' });
}

module.exports = {
  DBUSR: process.env.DBUSR,
  DBPSW: process.env.DBPSW,
}