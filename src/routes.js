UserController = require('./controllers/user-controller')
MovieController = require('./controllers/movie-controller')
module.exports = (server) => {


    // users
    
    server.get('/users', UserController.readAll);

    server.get('/users/:id', UserController.readUser);

    server.post('/users', UserController.create);

    server.delete('/users', UserController.delete);


    // movies

    server.get('/movies', MovieController.readAll);

    server.get('/movies/:id', MovieController.readMovie);

    server.post('/movies', MovieController.create);

    server.delete('/movies', MovieController.delete);

}

