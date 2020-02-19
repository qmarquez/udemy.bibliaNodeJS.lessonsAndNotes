const express = require('express');
const app = express();

const response = {
    data: [],
    services: 'Monolithic service',
    architecture: 'Monolithic'
}

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v1/users", (req, res) => {
    response.data.push("Carlos", "Quimey", "Martín");
    res.send(response);
});
app.get("/api/v1/books", (req, res) => {
    response.data.push("Harry potter", "Pragmatic programmer", "Alicia en el pais");
    res.send(response);
});
app.get("/api/v1/cars", (req, res) => {
    response.data.push("Ford", "Fiat", "Renault");
    res.send(response);
});

module.exports = app;