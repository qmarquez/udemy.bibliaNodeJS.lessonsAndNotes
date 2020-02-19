const server = require('./src/app');
server.listen(process.env.PORT, () => { console.log("[USER SERVICE]: Started") });