const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:movieId', commentController.getCommentsByMovie);
router.post('/:movieId', commentController.addComment);

module.exports = router;
