// ExchangeRates.jsx
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import {Typography} from '@mui/material';
const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/97d6a36917bc306c5ee20385/latest/USD')
      .then(res => res.json())
      .then(data => {
        setRates(data.conversion_rates);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch exchange rates:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;

  return (

   <> <div className="container"><Typography variant="h6" sx={{textAlign:"center",marginTop:11}}>
   Exchange Rates (Live)
 </Typography>
  <TableContainer component={Paper} sx={{ maxWidth: 600, maxHeight:600,mx: 'auto', my:2,   boxShadow: 3,
          borderRadius: 2, }}>
   <Table stickyHeader>
     <TableHead >
       <TableRow>
         <TableCell><strong>Currency</strong></TableCell>
         <TableCell align="right"><strong>Exchange Rate (in USD)</strong></TableCell>
       </TableRow>
     </TableHead>
     <TableBody>
       {Object.entries(rates).map(([currency, rate]) => (
         <TableRow key={currency}>
           <TableCell>{currency}</TableCell>
           <TableCell align="right">{rate}</TableCell>
         </TableRow>
       ))}
     </TableBody>
   </Table>
 </TableContainer>
 </div>
   </>
  );
};

export default ExchangeRates;
