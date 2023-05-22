const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        year: { type: Number, required: true },
        genre: { type: String, required: true },
        image: {
            type: String,
            required: false,
            default: '',
        },
    },
    {
        timestamp: true,
    },
    {
        collection: 'movie',
    }
);
const Movies = mongoose.model('movie', moviesSchema);
module.exports = Movies;
