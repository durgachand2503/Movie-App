const Movie = require('../models/Movie');

exports.getActors = async (req,res) => {
    const page = parseInt(req.query.page || 1);
    const itemPerPage = 10;
    const actors = await Movie.distinct("cast");
    const paginated = actors.slice(itemPerPage * (page - 1), itemPerPage * page);
    
    res.json(paginated);
};