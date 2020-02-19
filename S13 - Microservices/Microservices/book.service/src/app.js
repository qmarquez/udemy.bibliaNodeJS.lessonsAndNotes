const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'Book service',
    architecture: 'Microservices'
}

const logger = message => console.log("[BOOK SERVICE]: " + message)

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v2/books", (req, res) => {
    logger("Get book data");
    response.data.push("Adara", "Enzo", "Retro");
    res.send(response);
});

module.exports = app;