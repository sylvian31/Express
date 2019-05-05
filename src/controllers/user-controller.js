const User = require('../models/user')

module.exports = {
    readAll(req, res) {
        res.send({ users: 'des users' })
    },

    readUser(req, res) {
        res.send({ user: 'user avec id ' + req.params.id })
    },

    create(req, res) {
        const {body} = req;
        const user = new User({
            name: body.name
        });
        user.save().then(() => {
            res.send({result: 'user created: '+ user})
        });
    }
}