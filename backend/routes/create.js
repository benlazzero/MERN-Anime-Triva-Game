const express = require('express');

const createController = require('../controllers/create-controller');

const router = express.Router();

router.post('/create', createController.addUsername);

module.exports = router;
