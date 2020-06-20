const Product = require('../models/products');
const User = require('../models/user');

const fs = require('fs');
const request = require('request');

const download = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
    })
}

exports.getItem = (req, res, next) => {
    if ( req.session.user ) {
        User.findById(req.session.user._id)
        .then(u => {
            res.render('admin/getItem', {
                pageTitle: 'Add Item',
                userData: JSON.stringify(u),
                isLoggedIn: req.session.isLoggedIn,
            });
        })
    } else {
        res.redirect('/');
    }


}

exports.getItemPost = async (req, res, next) => {
    let data = [];
    const { title, price, image, description, category, subcategory, specificItem } = req.body;
    for (let i = 0; i < image.length - 1; i++) {
        let extension = image[i].split('.');
        extension = extension[extension.length - 1].toLowerCase();
        if (extension === 'jpg' || extension === 'png' || extension === 'jpeg') {
            const link = encodeURIComponent(image[i]);
            data.push({
                name: link,
                mimetype: extension
            });
            download(image[i], `./public/images/${link}`, () => {});
        }
    }
    let photos;
    if (req.files) {
        photos = req.files.imgs;
        Array.from(photos).forEach(photo => {
            photo.mv(`public/images/${photo.name}`);
            data.push({
                name: photo.name,
                mimetype: photo.mimetype,
            });
        });
    } 
    const product = new Product({title, image: data, price, raiting: 0, description, category, subCategory: subcategory, specificItem});
    product.save()
        .then(result => {
            
        })
        .catch(err => {
            throw err;
        })
    res.redirect('/');
}   