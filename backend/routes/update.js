const express = require('express');

const updateController = require('../controllers/update-score');

const router = express.Router();

router.post('/update', updateController.updateScore);

module.exports = router;
