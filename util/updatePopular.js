const Products = require('../models/products');
const mongoose = require('mongoose');
const Popular = require('../models/popular');

const updatePopularItems = () => {
    const pItems = [];
    Products.find()
    .then(items => {
        items.sort((a, b) => b.raiting - a.raiting);
        for ( let i = 0; i < 6 && items[i]; i++ ) {
            pItems.push(items[i]);
        }
        mongoose.connection.db.dropCollection('populars');
        Popular.insertMany(pItems, err => {
            if (err) throw err;
        });
    })
    .catch(err => {
        throw err;
    })
}

module.exports = updatePopularItems;     