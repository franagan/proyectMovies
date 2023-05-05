const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        year: { type: Number },
        genre: { type: String, required: true },
    },
    {
        timestamp: true,
    },
    {
        collection: 'movies',
    }
);
const Movies = mongoose.model('movie', moviesSchema);
module.exports = Movies;
