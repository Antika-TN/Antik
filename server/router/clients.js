
const express = require('express');
const router = express.Router();
const clientControllers = require('../controler/clientControler')

router.get('/',  /*  middleware ,controller */clientControllers.getAllClients);


router.get('/:UserId',  /*  middleware ,controller */clientControllers.getOneClients);


router.put('/:id',  /*  middleware ,controller */clientControllers.updateClient);


module.exports = router;
