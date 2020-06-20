const express = require('express');
const bodyParser = require('body-parser');
const MONGODB_URI = 'mongodb+srv://octavian:nitbw7iAnfu8M5KU@node-complete-dxgaa.mongodb.net/shop?retryWrites=true&w=majority';
const mongoose = require('mongoose');
const updatePopularItems = require('./util/updatePopular');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');
const csrf = require('csurf');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const twoDaysInMiliseconds = 1000*60*60*48;

const User = require('./models/user'); 

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');
  
app.use(fileUpload({
    createParentPath: true
}));
 
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: store}));
app.use(csrfProtection);

 

setInterval(() => {
    updatePopularItems();
},twoDaysInMiliseconds); 

const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');
const jewelleryAccessoriesRouter = require('./routes/jewellery&accessories');
const authRouter = require('./routes/auth');

app.use((req, res, next) => {
    if ( req.session.user ) {
        return User.findById(req.session.user._id)
            .then(user => {
            req.user = user;
            return next();
            })
            .catch(err => {
            throw err;
            })
    } else if (!req.session.visitator) {
        req.session.cookie.expires = new Date(Date.now() + 1000*60*60*24*5);
        req.session.visitator = {
            basket: { items: [] },
            likesItems: []
        }
        console.log(req.session);
        return next();
    } else return next();

})  
   
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
})

app.use(shopRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);
app.use('/jewellry&accessories', jewelleryAccessoriesRouter);


mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(user => {
        app.listen(3045);
    })
    .catch(err => {
        throw err; 
    }) 
    