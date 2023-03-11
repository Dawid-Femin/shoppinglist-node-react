const SingleItem = require('../../database/models/item');

module.exports = {

    //Get all items
    async getAllItems(req, res) {
        let item;
        try {
            item = await SingleItem.find({});
        } catch(err) {
            return res.status(500).json({message: err.message});
        }
        res.status(200).json(item);
    },

    //Get single item
    async getItem(req, res) {
        const id = req.params.id;
        let item;
        try {
            item = await SingleItem.findOne({ _id: id })
        } catch(err) {
            return res.status(500).json({message: err.message});
        }
        res.status(200).json(item);
    },

    //Add item
    async addItem(req, res) {
        const name = req.body.name;
        const quantity = req.body.quantity;
        let item;
        try {
            item = new SingleItem({name, quantity});
        } catch(err) {
            return res.status(422).json({message: err.message});
        }
        await item.save();
        res.status(201).json(item);
    },

    //Edit item
    async editItem(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const quantity = req.body.quantity;
        let item;
        try {
            item = await SingleItem.findOne({ _id: id});
            item.name = name;
            item.quantity = quantity;
        } catch(err) {
            return res.status(500).json({message: err.message});
        } 
        await item.save();
        res.status(201).json(item);
    },

    //Delete item
    async deleteItem(req, res) {
        const id = req.params.id;
        let item;
        try {
            item = await SingleItem.deleteOne({ _id: id });
        } catch(err) {
            return res.status(500).json({message: err.message});
        }
        res.sendStatus(204);
    },
}