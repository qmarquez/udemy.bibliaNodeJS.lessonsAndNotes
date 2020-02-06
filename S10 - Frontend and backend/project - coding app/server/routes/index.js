const path = require('path');
const express = require('express');
const server = express();
const cors = require('cors');
const { Technology } = require('../models');

server.use(express.json());
server.use(express.static(path.join(__dirname, '..', '..', 'public')));
server.use(cors());

// Handle routes this way isn't the best practice.
server.get('/api/technologies', (req, res) => {
  const technologies = (await Technology.find())
    .map(technology => {
      technology.logo = `${req.protocol}̣̣://${req.headers.host}/img/${logo}`;
      return technology
    });
  res.send({ data: technologies });
});

server.get('/api/technology/:id', (req, res) => {
  const { id } = req.params;
  const technology = await Technology.findById(id);
  technology.logo = `${req.protocol}̣̣://${req.headers.host}/img/${logo}`;

  res.send({ data: technology });
});

server.get('/api/technology/search', (req, res) => {
  const { name } = req.query;
  const technologies = (await Technology.find({ name: new RegExp(name, 'i') }))
    .map(technology => {
      technology.logo = `${req.protocol}̣̣://${req.headers.host}/img/${logo}`;
      return technology
    });

  res.send({ data: technologies });
});

module.exports = server;