const User = require('../models/user')
const Movie = require('../models/movie')

module.exports = {
    readAll(req, res) {
        User.find().then((users) => {
            res.send(users)
        });
    },

    readUser(req, res) {
        const { id } = req.params;
        User.findById(id).then((user) => {
            res.send(user)
        })
    },

    create(req, res) {
        const { name, age } = req.body;
        const user = new User({
            name,
            age
        });
        const movie = new Movie({ title: "The lord of rings", duration: 150 })
        user.movies.push(movie);
        user.save().then(() => {
            movie.save().then(() => {
                res.send({ result: user })
            })
        });
    },

    delete(req, res) {
        const { id } = req.body;
        User.findByIdAndDelete(id).then((user) => {
            res.send(user);
        })
    },

    oldest(req, res) {
        User.find().sort({ 'age': -1 }).limit(1).then((user) => {
            res.send(user);
        })
    },

    youngest(req, res) {
        User.find().sort({ 'age': 1 }).limit(1).then((user) => {
            res.send(user);
        })
    },

    hasLongestMovie(req, res) {
        User.aggregate([

            { $unwind: "$movies" },
            {
                $lookup:
                {
                    from: "movies", //collection
                    localField: "movies", //field movies from user
                    foreignField: "_id", // foreign key
                    as: "movieContent" //alias
                }
            },
            { $unwind: "$movieContent" }, //permet de remettre a plat notre movie car sinon il est dans un tableau
            { $sort: { "movieContent.duration": -1 } },
            { $limit: 1 },
            { $project: { "User name": "$name", "Movie title": "movieContent.title", "duration": "$movieContent.duration" } } // projection du resultat
        ]).then((info) => {
            res.send(info);
        })
    }




}