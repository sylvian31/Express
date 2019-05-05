const express = require('express');
const server = express();
const routes = require('./src/routes')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

server.use(bodyParser.json());
server.set('json spaces', 2);
routes(server);

server.listen(3050, () => {
    console.log("Ecoute sur le port 3050");

    mongoose.connect('mongodb://localhost/user_api_db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });

    mongoose.connection
        .once('open', () => {
            console.log("connexion start forward mongodb");
        })
        .on('error', (error) => {
            console.log("Erreur durant la connexion", error);
        });
})