const router = require('express').Router();
const authController = require('../controllers/authC');

router.post('/register', authController.postRegister);

router.post('/login', authController.postLogin);

router.post('/signout', authController.postSignOut)

module.exports = router;