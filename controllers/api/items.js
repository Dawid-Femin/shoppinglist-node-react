const SingleItem = require('../../database/models/item');

module.exports = {
    getAllItems(req, res) {
        res.send('API getAllElements working');
    },

    getItem(req, res) {
        res.send('API getItem working');
    },

    addItem(req, res) {
        const name = req.body.name;
        const quantity = req.body.quantity;
        res.send(`Item: ${name}, Quantity: ${quantity}`);
    },

    editItem(req, res) {
        res.send('API editItem working');
    },

    deleteItem(req, res) {
        const id = req.params.id;
        res.send('API deleteItem working');
    },
}