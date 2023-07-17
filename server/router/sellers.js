const express = require('express');
const router = express.Router();
const SellerController = require('../controler/SellerControler')

router.post('/:UserId',  SellerController.createSeller/*  middleware ,controller */);


router.get('/',  SellerController.getAllSellers/*  middleware ,controller */);


router.get('/:id', SellerController.getSellerById/*  middleware ,controller */);


router.put('/:id',  SellerController.updateSeller/*  middleware ,controller */);
router.delete('/:id',  SellerController.deleteSeller/*  middleware ,controller */);


module.exports = router;
