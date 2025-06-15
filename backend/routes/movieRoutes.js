const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/',movieController.getMovies);
router.get('/autocomplete', movieController.autocompleteMovies);
router.get('/search', movieController.searchMovies);
router.get('/:id', movieController.getMoviesById);



router.post('/', async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = router;
