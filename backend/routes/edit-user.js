const express = require('express');

const editController = require('../controllers/edit-controller');

const router = express.Router();

router.delete('/edit', editController.removeUser);
router.put('/edit', editController.resetUser);

module.exports = router;