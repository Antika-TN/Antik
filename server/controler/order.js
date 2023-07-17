const Order = require('../model/Order')

const getAllOrder = function(req,res){
    Order.findAll({})
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const getOneOrder = function(req,res){
    Order.findOne({where: { ClientId: req.params.ClientId } })
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const insertOrder = function(req,res){
    Order.create(  
      {orderDate:req.body.orderDate,
        totalAmount:req.body.totalAmount,
        createdAt:req.body.createdAt,
    
    updatedAt:req.body.updatedAt
  },
  {where: { ClientId: req.params.ClientId }})
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const updateOrder = function(req,res){
    Order.update(
      {orderDate:req.body.orderDate,
        totalAmount:req.body.totalAmount,
        createdAt:req.body.createdAt,
    updatedAt:req.body.updatedAt
  },{where: { ClientId: req.params.ClientId }})
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}

const deleteOrder = function(req,res){
    Order.destroy({
        where: {
          id: req.params.id
        }
      })
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}


module.exports = {getAllOrder,insertOrder,getOneOrder,updateOrder,deleteOrder}