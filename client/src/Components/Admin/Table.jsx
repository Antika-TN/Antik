import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

export default function DashboardTable ({sellersname}) {
  return (
    <TableContainer component={Paper}    sx={{ background: 'linear-gradient(90deg, #984D38, #181E41 60%)'}}>
    <Table>
   
      <TableHead>
        <TableRow>
          <TableCell>Company Name</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHead>

    
      <TableBody>
      {sellersname.map((seller) => (
            <TableRow key={seller.id}>
              <TableCell>{seller.companyName}</TableCell>
              <TableCell>ddd</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

