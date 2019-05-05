const mongoose = require('mongoose');
const Movie = require('./movie')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }]
});

UserSchema.virtual('countMovies').get(function () {
    return this.movies.length;
});


UserSchema.pre('remove' ,function (next) {    
    Movie.remove({_id: {$in: this.movies}}).then(() => {
        next();
    }).catch((error) => {
        console.log("Promise rejected", error);
    });
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

