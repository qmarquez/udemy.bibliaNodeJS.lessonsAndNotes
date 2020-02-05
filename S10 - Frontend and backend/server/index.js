const server = require('./routes');
const { PORT } = require('./config');

server.listen(PORT, () => {
  console.log('Server up :)');
});