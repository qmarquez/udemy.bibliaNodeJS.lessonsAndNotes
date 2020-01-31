const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

http
  .createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(home);
    } else if (url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(about);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('page not found');
    }

    res.end();
  })
  .listen(8081);