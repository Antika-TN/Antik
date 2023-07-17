const express = require('express');
const router = express.Router();
const SellerController = require('../controler/SellerControler')

router.get('/',SellerController.getAllCategory /*  middleware ,controller */ );
router.get('/:id',SellerController.getCategoryById /*  middleware ,controller */ );
router.post('/',SellerController.createCategory/*  middleware ,controller */);
router.put('/:id',SellerController.updateCategory /*  middleware ,controller */);
router.delete('/:id',SellerController.deleteCategory /*  middleware ,controller */);


module.exports = router;
