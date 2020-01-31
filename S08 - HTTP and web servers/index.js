const fs = require('fs');
const server = require('express')();

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

server.get('/', (req, res) => {
  res.write(home);
});

server.get('/about', (req, res) => {
  res.write(about);
});

server.listen(8081, () => {
  console.log('Server running on port 8081');
});