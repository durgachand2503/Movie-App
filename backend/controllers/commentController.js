const Comment = require('../models/Comment');

exports.getCommentsByMovie = async (req,res) => {
    const comments = await Comment.find({
        movie_id: req.params.movieId
    }).sort({date: -1});
    res.json(comments);
};

exports.addComment = async (req,res) => {
    const {name, email, text} = req.body;
    const comment = new Comment({
        movie_id: req.params.movieId,
        name, email, text,
        date: new Date()
    });
    await comment.save();
    res.status(201).json(comment);
};