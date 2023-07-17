const express = require('express');
const router = express.Router();
const {getAll,addReview}=require('../controler/ReviewControler')

router.get('/:id',getAll);

router.post('/:ClientId/:ProductId',addReview);

router.put('/:id',  /*  middleware ,controller */);

module.exports = router;
