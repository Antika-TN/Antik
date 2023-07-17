import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Allproduct() {
  const [productsname, setProductsname] = useState([])

  useEffect(() => {
    fetchProductsData()
  }, []);

  async function fetchProductsData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getproducts')
      const data = await response.json()


      setProductsname(data.data)
    } catch (error) {
      console.error('Error', error)
    }
  }

  async function deleteProduct(id) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteProduct/${id}`,{
        method:'DELETE',
      });

      if (response.ok) {
        console.log('product deleted successfully')
      } else {
        console.error('Failed to delete product')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


    const handleDelete = async (id) => {
      try{
        await deleteProduct(id)
        fetchProductsData()
      }catch(error){
console.error('Error deleting product:',error)
      }
      
    };
    
  return (
    <div>
    <div>
    <Link to="/dashbord">
               <Button variant="contained" color="primary">go back to dashboard</Button>
             </Link>
    </div>

    <List>
    {productsname.map((product) => (
      <ListItem key={product.id}>
        <ListItemText primary={`Category:  ${product.Category.name}`} secondary={`Product: ${product.name}`} />
        <ListItemText primary={`Company: ${product.Seller.companyName}`} secondary={`Created At: ${product.createdAt}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  </div>
  )
}

export default Allproduct
