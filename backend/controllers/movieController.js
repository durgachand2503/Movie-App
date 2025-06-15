const Movie = require('../models/Movie');

exports.getMovies = async (req,res) => {
    const page = parseInt(req.query.page || 1);
    const sort = req.query.sort || '-released';
    const itemPerPage = 10;
    const movies = await Movie.find()
        .sort(sort)
        .skip(itemPerPage * (page - 1))
        .limit(itemPerPage);
    res.json(movies);
};

exports.getMoviesById = async (req,res) => {
    const movie = await Movie.findById(req.params.id);
    if(!movie) return res.status(404).json({msg:"Not Found.."});
    res.json(movie);
};

exports.searchMovies = async (req,res) => {
    const {q} = req.query;
    if (!q) return res.json([]);
    const movies = await Movie.find({$text:{$search: q} }).limit(20);
    res.json(movies); 
};

// controllers/movieController.js
exports.autocompleteMovies = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);
  try {
    const movies = await Movie.find({ title: { $regex: '^' + q, $options: 'i' } }).limit(10);
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
