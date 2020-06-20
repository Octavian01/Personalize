const router = require('express').Router();
const adminController = require('../controllers/adminC');

router.get('/getItem', adminController.getItem);

router.post('/getItemPost', adminController.getItemPost);

module.exports = router;