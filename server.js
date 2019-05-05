const express = require('express');
const server = express();
const routes = require('./src/routes')

routes(server);

server.listen(3050, () => {
    console.log("Ecoute sur le port 3050");
})