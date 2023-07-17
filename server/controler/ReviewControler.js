const Review =require('../model/Review')
const Product =require('../model/Product')
module.exports={
    getAll(req,res){
      const id=req.params.id
      Review.findAll({
        include: [
          {
            model: Product,
            where: { id: id },
          },
        ],
      })
      .then((result)=>{
        res.status(200).send(result)
      })
      .catch((err)=>{
       return res.status(500).send(err)
      })
    },

    addReview(req,res){
      const {rating,comment}=req.body
      const ClientId=req.params.ClientId
      const ProductId=req.params.ProductId
      Review.create({rating,comment,ClientId,ProductId})
      .then((reslmt)=>{
        res.status(201).send(reslmt)
      })
      .catch((err)=>{
        res.status(500).send(err)
      })
    }
    
}