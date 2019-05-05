module.exports = {
    getUsers(req, res){
        res.send({users: 'des users'})
    },

    getUser(req, res) {
        res.send({user: 'user avec id ' + req.params.id})
    }
}