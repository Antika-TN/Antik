import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Allsellers() {
    const [sellersname, setSellersname] = useState([])

  useEffect(() => {
    fetchSellersData()
  }, []);

  async function fetchSellersData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getSellers')
      const data = await response.json()


      setSellersname(data.data)
    } catch (error) {
      console.error('Error', error)
    }
  }

  async function deleteSeller(id) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteSeller/${id}`,{
        method:'DELETE',
      });

      if (response.ok) {
        console.log('seller deleted successfully')
      } else {
        console.error('Failed to delete seller')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


    const handleDelete = async (id) => {
      try{
        await deleteSeller(id)
        fetchSellersData()
      }catch(error){
console.error('Error deleting seller:',error)
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
      {sellersname.map((seller) => (
        <ListItem key={seller.id}>
          <ListItemText primary={seller.companyName} secondary={seller.createdAt} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(seller.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
    </div>
  )
}

export default Allsellers
