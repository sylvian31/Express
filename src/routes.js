UserController = require('./controllers/user-controller')
module.exports = (server) => {
    
    server.get('/users', UserController.getUsers);

    server.get('/users/:id', UserController.getUser)
}

