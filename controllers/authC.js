const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.postRegister = (req, res, next) => {
    const rs = JSON.parse(Object.keys(req.body)[0]);
    const { firstName, password, email } = rs;
    User.findOne({email})
        .then(data => {
            if ( data === null ) {
                res.json({done: true});
                bcrypt.hash(password, 12)
                    .then(hashedPassword => {
                        const newUser = new User({
                            email,
                            firstName,
                            password: hashedPassword,
                            basket: { items: [] }
                        });
                        newUser.save();
                        req.session.user = newUser;
                        req.session.isLoggedIn = true; 
                        req.session.save(err => {
                            if ( err ) throw err;
                        })
                        res.end();
                    })
            } else {
                res.json({done: false}) // email exist already
                res.end();
            }
        })   
}
  
exports.postLogin = (req, res, next) => {
    const rs = JSON.parse(Object.keys(req.body)[0]);
    const { email, password, sess } = rs;
    User.findOne({email})
        .then(user => {
            if ( user === null ) {
                res.json({done: 'email'});
                return res.end();
            }
            bcrypt.compare(password, user.password)
                .then(doMatch => {
                    if ( doMatch ) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        user.basket.items = user.basket.items.concat(req.session.visitator.basket.items);
                        user.likesItems = user.likesItems.concat(req.session.visitator.likesItems);
                        user.save();
                        return req.session.save(err => {
                            if ( err ) throw err
                            res.json( { done: true } );
                            return res.end();
                        })
                    }
                    res.json( { done: 'password' } );
                    return res.end();
                })
        })
}

exports.postSignOut = (req, res, next) => {
    req.session.destroy(err => {
        if ( err ) throw err;
        res.json({done:true});
        res.end();
    })
}