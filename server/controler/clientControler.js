
const Client = require('../model/Client')

const getAllClients = function(req,res){
    Client.findAll({})
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const getOneClients = function(req,res){
    Client.findOne({where: { UserId: req.params.UserId } })
    .then((results) => {
      res.status(200).send(results); 
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

const updateClient = function(req,res){
  Client.update(
  {firstName:req.body.firstName,
    lastName:req.body.lastName,
    phoneNumber:req.body.phoneNumber,
    createdAt:req.body.createdAt,
    updatedAt:req.body.updatedAt,
    image:req.body.image
  },
  {where: { UserId: req.params.UserId }})
  .then((results) => {
    res.status(200).send(results); 
  })
  .catch((error) => {
    res.status(500).send(error);
  });
}


module.exports = {getAllClients,getOneClients,updateClient}

