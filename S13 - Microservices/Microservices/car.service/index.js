const server = require('./src/app');
server.listen(process.env.PORT, () => { console.log("[CAR SERVICE]: Started") });