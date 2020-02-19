const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'User service',
    architecture: 'Microservices'
}

const logger = message => console.log("[USER SERVICE]: " + message)

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v2/users", (req, res) => {
    logger("Get user data");
    response.data.push("Juan", "Locowas", "Humberto");
    res.send(response);
});

module.exports = app;