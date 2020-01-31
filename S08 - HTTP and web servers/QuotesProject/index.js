const { PORT } = require('./config');
const server = require('express')();

server.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})

