const SingleItem = require('../../database/models/item');

module.exports = {
    saveItem(req, res) {
    const newItem = new SingleItem({
            name: 'New record 3',
            quantity: 1
        });

        newItem.save()
        .then(() => {
            console.log('the product has been added');
        });
    }
}