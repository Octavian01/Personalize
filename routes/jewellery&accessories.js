const router = require('express').Router();

const jewelleryAccesoriesControler = require('../controllers/jewellery&accessoriesC.js');

router.get('/', jewelleryAccesoriesControler.getIndex);

module.exports = router;