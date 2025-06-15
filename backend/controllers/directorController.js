const Movie = require('../models/Movie');

exports.getDirectors = async (req,res) => {
    const page = parseInt(req.query.page || 1);
    const itemPerPage = 10;
    const directors = await Movie.distinct("directors");
    const paginated = directors.slice(itemPerPage * (page - 1), itemPerPage * page);
    
    res.json(paginated);
};