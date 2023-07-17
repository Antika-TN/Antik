const Seller = require('../model/Seller')
const Client = require('../model/Client')
const Products = require('../model/Product.js');
const category = require('../model/Category')

const AdminControler ={

    async getAllseller(req,res){
        try{
            const sellers= await Seller.findAll()
            res.status(200).json({message:'sellers retrieved successfully', data:sellers})
        } catch (error){
            console.log('error retrieving sellers:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getAllclient(req,res){
        try{
            const clients= await Client.findAll()
            res.status(200).json({message:'clients retrieved successfully', data:clients})
        } catch (error){
            console.log('error retrieving clients:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async deleteSeller(req,res){
        const sellerId = req.params.id
        try{
            const seller= await Seller.findByPk(sellerId)
            if (!seller) {
                return res.status(404).json({ error: 'seller not found' });
              }
              await seller.destroy()
            res.status(200).json({message:'seller deleted successfully'})
        } catch (error){
            console.log('Error deleting seller:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async deleteClient(req,res){
        const clientId = req.params.id
        try{
            const client= await Client.findByPk(clientId)
            if (!client) {
                return res.status(404).json({ error: 'client not found' });
              }
              await client.destroy()
            res.status(200).json({message:'client deleted successfully'})
        } catch (error){
            console.log('Error deleting client:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getAllProducts(req, res) {
        try {
          const products = await Products.findAll({
            include: [
              { model: Seller, attributes: ['companyName'], as: 'Seller' },
              { model: category, attributes: ['name'], as: 'Category' }
            ]
          });
          res.status(200).json({ message: 'Products retrieved successfully', data: products });
        } catch (error) {
          console.error('Error retrieving products:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      },

      async deleteProduct(req, res) {
        const productId = req.params.id;
    
        try {
          const product = await Products.findByPk(productId);
          if (!product) {
            return res.status(404).json({ error: 'Product not found' });
          }
          await product.destroy();
          res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
          console.error('Error deleting product:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      },

      async SelectclientCount (req,res){
        try{
            const clientCount = await Client.count()
            res.status(200).json({ message:'client count retrieved successfully',data:clientCount})
        } catch(error){
            console.log('error retrieving client count:',error)
            res.status(500).json({error:'internal server error'})
        }
      },

      async SelectsellerCount (req,res){
        try{
            const sellerCount = await Seller.count()
            res.status(200).json({ message:'seller count retrieved successfully',data:sellerCount})
        } catch(error){
            console.log('error retrieving seller count:',error)
            res.status(500).json({error:'internal server error'})
        }
      },

      async SelectproductCount (req,res){
        try{
            const productCount = await Products.count()
            res.status(200).json({ message:'product count retrieved successfully',data:productCount})
        } catch(error){
            console.log('error retrieving product count:',error)
            res.status(500).json({error:'internal server error'})
        }
      },

      async sellerproductCount (req,res){
        try{
            const sellerId =req.params.id
            const productCount= await Products.count({
              where:{SellerId:sellerId}
            })
            res.status(200).json({productCount})
        } catch(error){
            console.log('error retrieving product count:',error)
            res.status(500).json({error:'internal server error'})
        }
      },
}

module.exports = AdminControler;