const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/', actorController.getActors);

module.exports = router;
