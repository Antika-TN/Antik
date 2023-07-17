const express = require('express');
const router = express.Router();

const orderControllers = require('../controler/order')

router.get('/', /*  middleware ,controller */orderControllers.getAllOrder);


router.get('/:ClientId',/*  middleware ,controller */orderControllers.getOneOrder);

router.post('/insert/:ClientId',/*  middleware ,controller */ orderControllers.insertOrder);

router.put('/:ClientId',/*  middleware ,controller */ orderControllers.updateOrder);

router.delete('/:id',orderControllers.deleteOrder)


module.exports = router;
