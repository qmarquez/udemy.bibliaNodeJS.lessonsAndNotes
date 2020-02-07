const path = require('path');
const express = require('express');
const server = express();
const cors = require('cors');
const { Technology } = require('../models');

server.use(express.json());
server.use(express.static(path.join(__dirname, '..', '..', 'public')));
server.use(cors());

// Handle routes this way isn't the best practice.
server.get('/api/technologies', async (req, res) => {
  const technologies = (await Technology.find())
    .map(technology => {
      technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
      return technology;
    });
  res.json({ data: technologies });
});
server.get('/api/technology/:id', async (req, res) => {
  const { id } = req.params;
  const technology = await Technology.findById(id);
  technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;

  res.json({ data: technology });
});
server.get('/api/technology/search', async (req, res) => {
  const { name } = req.query;
  const technologies = (await Technology.find({ name: new RegExp(name, 'i') }))
    .map(technology => {
      technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
      return technology
    });

  res.json({ data: technologies });
});

module.exports = server;