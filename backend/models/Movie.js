const mongoose = require('mongoose');
const {Schema} = mongoose;

const movieSchema = new Schema({
    title:{type:String, required:true},
    plot: { type: String },
    genres: [{ type: String }],
    runtime: { type: Number },
    cast: [{ type: String }],
    num_mflix_comments: { type: Number },
    poster: { type: String },
    fullplot: { type: String },
    languages: [{ type: String }],
    released: { type: Date },
    directors: [{ type: String }],
    writers: [{ type: String }],
    lastupdated: { type: Date },
    year: { type: Number },
    awards: {
        wins: { type: Number },
        nominations: { type: Number },
        text: { type: String }
        },

    imdb: {
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number }
        },
    countries: [{ type: String }],
    type: { type: String }
    },
    {timestamps:true}
);
movieSchema.index({title:"text", fullplot:"text", cast:"text", genres:"text"});

const Movie = mongoose.model('movies',movieSchema);
module.exports = Movie;

