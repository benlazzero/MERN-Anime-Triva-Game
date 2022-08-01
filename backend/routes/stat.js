const express = require('express');

const statController = require('../controllers/stat-controller');

const router = express.Router();

router.get('/stat', statController.getUserStats);

module.exports = router;