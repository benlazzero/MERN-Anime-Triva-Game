const express = require('express');

const gameController = require('../controllers/game-controller');

const router = express.Router();

router.get('/api/game', gameController.displayQuote);


module.exports = router;
