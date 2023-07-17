const express = require('express');
const router = express.Router();
const itemsControllers = require('../controler/orderItems')

router.get('/', /*  middleware ,controller */itemsControllers.getAllItems);


router.get('/:OrderId',/*  middleware ,controller */itemsControllers.getOneItems);

router.post('/insert/:OrderId',/*  middleware ,controller */ itemsControllers.insertItems);

router.put('/:OrderId',/*  middleware ,controller */ itemsControllers.updateItems);



module.exports = router;