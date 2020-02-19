const server = require('./src/app');
server.listen(process.env.PORT, () => { console.log("[BOOK SERVICE]: Started") });