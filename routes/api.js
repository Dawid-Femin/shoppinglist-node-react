const express = require('express');
const router = express.Router();
const testControllers = require('../controllers/api/test');

router.get('/', testControllers);

module.exports = router;