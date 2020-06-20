const Popular = require('../models/popular');
const Products = require('../models/products');
const User = require('../models/user');
const mongoose = require('mongoose');
           
exports.getIndex = (req, res, next) => {
    console.log(req.session.visitator.basket);
    Popular.find()
        .then(data => {
            if ( req.session.user ) {
                User.findOne({_id: req.session.user._id})
                .then(u => {
                    res.render('shop/index', {
                        pageTitle: 'Personalize',
                        data: JSON.stringify(data),
                        isLoggedIn: req.session.isLoggedIn,
                        userData: JSON.stringify(u),
                    })
                })
            } else { 
                res.render('shop/index', {
                    pageTitle: 'Personalize',
                    data: JSON.stringify(data),
                    isLoggedIn: req.session.isLoggedIn,
                    userData: JSON.stringify(req.session.visitator)
                })
            }
        })
        .catch(err => {
            throw err; 
        })
}
         
exports.getProduct = (req, res, next) => {
    const id = req.params.productId;
    Products.findById(id)
        .then(product => {
            if  ( req.session.user ) {
                User.findById(req.session.user._id)
                .then(u => {
                    res.render('shop/product', {
                        product: JSON.stringify(product),
                        pageTitle: product.title,
                        isLoggedIn: req.session.isLoggedIn,
                        userData: JSON.stringify(u),
                        productId: id,
                    });
                })
            } else {
                res.render('shop/product', {
                    product: JSON.stringify(product),
                    pageTitle: product.title,
                    isLoggedIn: req.session.isLoggedIn,
                    productId: id,
                    userData: JSON.stringify(req.session.visitator)
                });
            }

        })
        .catch(err => {
            throw err;
        })
}
           
exports.getCart = (req, res, next) => {
    if ( req.session.user ) {
        User.findById(req.session.user._id)
        .then(u => {
            display(u);
        })
    } else {
        display(req.session.visitator);
    }
    function display(u) {
        let basket = u.basket.items;
        let items = [];
        basket.forEach(item => {
            items.push(mongoose.Types.ObjectId(item.productId));
        })
        Products.find({
            '_id': {
                $in: items
            }
        }, (err, docs) => {
            let finalItems = []; 
            for ( let j = 0; j < items.length; j++ ) {
                for ( let i = 0; i < docs.length; i++ ) {
                    if ( items[j].toString() === docs[i]._id.toString() ) {
                        finalItems.push({
                            image: docs[i].image[0].name,
                            price: docs[i].price,      
                            title: docs[i].title,
                            quantity: basket[j].quantity,
                            itemId: basket[j].productId 
                        });
                        break;
                    }
                }                
            }
            
            let userFirstName = req.session.user ? req.session.user.firstName : 'Guest';
            userFirstName += ' Cart';
            res.render('shop/cart', {
                pageTitle: userFirstName,
                items: JSON.stringify(finalItems), 
                isLoggedIn: req.session.isLoggedIn,
                userData: JSON.stringify(u),
            })  
        })
    }
}
  
exports.addToCart = (req, res, next) => {
    const id = req.params.productId;
    if ( req.session.user ) {
        const userId = req.session.user._id;
        User.findById(userId)
            .then(user => {
                add(user);
                user.save();
                res.redirect('/cart');
            })
    } else {
        add(req.session.visitator);
        req.session.save();
        res.redirect('/cart');
    }
    function add(user) {
        let found = false;
        for ( const item of user.basket.items ) {
            console.log(item);
            if ( item.productId.toString() === id.toString() ) {
                found = true;
                item.quantity++;
            }
        }
        if ( !found ) {
            user.basket.items.push({
                productId: id,
                quantity: 1,
            });
        }
    }  
}

exports.postRemoveProduct = (req, res, next) => {
    const id = req.params.productId;
    User.findById(req.session.user._id)
    .then(u => {
        const basket = u.basket.items.filter(i => i.productId.toString() !== id.toString());
        u.basket.items = basket;
        u.save();
        res.redirect('/cart');   
    }) 
}  

exports.postUpdateQuantity = (req, res, next) => {
    const id = req.params.productId;
    const quantity = JSON.parse(Object.keys(req.body)[0]).value;
    User.findOne({_id: req.user._id})
        .then(u => {
            const basketItems = u.basket.items;
            for ( const item of basketItems ) {
                if ( item.productId.toString() === id.toString() ) {
                    item.quantity = quantity;
                    break;
                }
            }
            u.basket.items = basketItems;
            u.save();
            res.json( { done: true } );
            res.end();
        })
}      

exports.addLikeItem = (req, res, next) => {
    const id = Object.keys(req.body)[0].split('"')[1];
    Products.findById(id)
    .then(p => {
        p.raiting++;
        p.save();
    })
    .catch(err => {
        throw err;
    })
    if ( req.session.user ) {
        User.findById(req.session.user._id)
        .then(u => {
            u.likesItems.push( { productId: id } );
            u.save();
            res.json( { done:true } );
            res.end();
        })
        .catch(err => {
            throw err;
        })
    } else {
        req.session.visitator.likesItems.push( { productId: id } );
        console.log(req.session);
        req.session.save();
        res.json( { done:true } );
        res.end();
    }
}   
     
exports.removeLikeItem = (req, res, next) => {
    const id = Object.keys(req.body)[0].split('"')[1];
    Products.findById(id)
    .then(p => {
        p.raiting--;
        p.save();
    })
    .catch(err => {
        throw err;
    })
    if ( req.session.user ) {
        User.findById(req.session.user._id)
        .then(u => {
            const likesItems = u.likesItems.filter(i => i.productId.toString() !== id.toString());
            u.likesItems = likesItems;
            u.save();
            res.json( { done: true } ); 
            res.end();
        })
    } else {
        const u = req.session.visitator;
        const likesItems = u.likesItems.filter(i => i.productId.toString() !== id.toString());
        u.likesItems = likesItems;
        res.json( { done: true } ); 
        res.end();
    }
}           