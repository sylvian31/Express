UserController = require('./controllers/user-controller')
module.exports = (server) => {
    
    server.get('/users', UserController.readAll);

    server.get('/users/:id', UserController.readUser);

    server.post('/users', UserController.create);

}

