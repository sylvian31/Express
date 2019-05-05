const Movie = require('../models/movie')

module.exports = {
    readAll(req, res) {
        Movie.find().then((movies) => {
            res.send(movies)
        });
    },

    readMovie(req, res) {
        const {id} = req.params;
        Movie.findById(id).then((movie) => {
            res.send(movie);    
        })
    },

    create(req, res) {
        const {title, duration} = req.body;
        const movie = new Movie({
            title,
            duration
        });
        movie.save().then(() => {
            res.send({result: movie})
        });
    },

    delete(req, res){
        const {id} = req.body;
        Movie.findByIdAndDelete(id).then((movie) => {
            res.send(movie);
        })
    }


}