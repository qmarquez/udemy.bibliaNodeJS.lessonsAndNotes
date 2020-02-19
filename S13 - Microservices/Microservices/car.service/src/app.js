const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'Car service',
    architecture: 'Microservices'
}

const logger = message => console.log("[CAR SERVICE]: " + message)

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v2/cars", (req, res) => {
    logger("Get car data");
    response.data.push("Toyota", "Nissan", "Lambo");
    res.send(response);
});

module.exports = app;