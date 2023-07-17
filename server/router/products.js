const express = require('express');
const router = express.Router();
const SellerController = require('../controler/SellerControler')

router.get('/',  SellerController.getAllProducts /*  middleware ,controller */);

router.get('/:id',  SellerController.getProductById  /*  middleware ,controller */);

router.post('/:CategoryId/:SellerId',SellerController.createProduct) ; /*  middleware ,controller */

router.put('/:id', SellerController.updateProduct /*  middleware ,controller */);

router.delete('/:id', SellerController.deleteProduct /*  middleware ,controller */)

module.exports = router
