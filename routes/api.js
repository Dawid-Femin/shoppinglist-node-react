const express = require('express');
const router = express.Router();
const { saveItem } = require('../controllers/api/items');

router.get('/', saveItem);

module.exports = router;