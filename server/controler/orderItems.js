const OrderItems = require('../model/orderItems')

const getAllItems= function(req,res){
    OrderItems.findAll({})
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const getOneItems = function(req,res){
    OrderItems.findOne({where: { OrderId: req.params.OrderId } })
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const insertItems = function(req,res){
    OrderItems.create({
    quantity :req.body.quantity,
    createdAt:req.body.createdAt,
    updatedAt:req.body.updatedAt,
    ProductId : req.body.ProductId
    },
    {where: { OrderId: req.params.OrderId }})
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const updateItems = function(req,res){
    OrderItems.Update({
      quantity :req.body.quantity,
      createdAt:req.body.createdAt,
      updatedAt:req.body.updatedAt,
      ProductId : req.body.ProductId
      },
      {where: { OrderId: req.params.OrderId }})
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}




module.exports = {getAllItems,getOneItems,insertItems,updateItems}