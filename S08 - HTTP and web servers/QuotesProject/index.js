const express = require('express');
const server = express();
const { PORT } = require('./config');
const { notFoundMiddleware } = require('./middlewares');

server.use(express.static('./public'));
// bodyparser can be used.
server.use(express.json());

server.use('/quotes', require('./routes').quoteRoutes);
server.use('/', require('./routes').homeRoutes);

server.use(notFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
})

