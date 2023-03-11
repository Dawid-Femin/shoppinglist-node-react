const express = require('express');
const router = express.Router();
const { getAllItems, getItem, addItem, editItem, deleteItem } = require('../controllers/api/items');

//Endpoints
//Get all items
router.get('/items', getAllItems);
//Get single item
router.get('/items/:id', getItem);
//Add item
router.post('/items', addItem);
//Edit item
router.put('/items/:id', editItem);
//Delete item
router.delete('/items/:id', deleteItem);

module.exports = router;