const express = require('express');
const router = express.Router();
const user = require('./user');

router.put('/save', user);

module.exports = router;
