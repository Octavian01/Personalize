const router = require('express').Router();
const shopController = require('../controllers/shopC');

router.get('/', shopController.getIndex);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/addToCart/:productId', shopController.addToCart);

router.post('/postRemoveProduct/:productId', shopController.postRemoveProduct);

router.post('/updateQuantity/:productId', shopController.postUpdateQuantity);

router.post('/addLikeItem', shopController.addLikeItem);

router.post('/removeLikeItem', shopController.removeLikeItem);


module.exports = router;  