const express = require('express');
const router = express.Router();
const AdminControler= require ('../controler/adminControler')

router.get('/getSellers',AdminControler.getAllseller );
router.get('/getclients',AdminControler.getAllclient );
router.get('/getproducts',AdminControler.getAllProducts );
router.get('/selectclientCount',AdminControler.SelectclientCount);
router.get('/selectsellerCount',AdminControler.SelectsellerCount);
router.get('/selectproductCount',AdminControler.SelectproductCount);
router.delete('/deleteSeller/:id',AdminControler.deleteSeller)
router.delete('/deleteClient/:id',AdminControler.deleteClient)
router.delete('/deleteProduct/:id',AdminControler.deleteProduct)

router.get('/:id',  /*  middleware ,controller */);


router.put('/:id',  /*  middleware ,controller */);

module.exports = router;