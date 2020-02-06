const server = require('./routes');
const { PORT } = require('./config');
const { mongooseConnect } = require('./lib');

mongooseConnect.up()
  .then(() => {
    server.listen(PORT, () => {
      console.log('Server up :)');
    });
  })
  .catch(console.log);