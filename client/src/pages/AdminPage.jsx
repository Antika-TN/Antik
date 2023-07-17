import React, { useState , useEffect } from 'react'
import DashboardTable from '../Components/Admin/Table.jsx'
import Cards from '../Components/Admin/cards.jsx';
import './Styles.Page/Auth.css'

const AdminPage = () => {
  const [sellersname, setSellersname] = useState([]);

  useEffect(() => {
    fetchSellersData();
  }, []);

  async function fetchSellersData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getSellers');
      const data = await response.json();


      setSellersname(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div>
      
    <div className='cards'>
    
    <Cards/>
    
    </div>
    <h1 className='titl'>Top Market Statistics</h1>
    <h2 className='underTitle'>The NFTs on_____ ,ranked by volume,floor price and other statistics</h2>
    <div>
     
      <DashboardTable sellersname={sellersname} />
    </div>
    </div>
  )
}

export default AdminPage