const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    duree: Number
});

const Movie = mongoose.model('movie', MovieSchema);

// const Movie = mongoose.model('movie', MovieSchema, "movies_collection"); // le dernier parametre permet de choiir le nom de la collection en custom sinon mongoose rajoutera un 's' 

module.exports = Movie;
