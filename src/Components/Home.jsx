import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TableComp from '../Components/TableComp';
import { Container, TableContainer } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState ,useEffect} from "react";
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import useEMICalculator from '../Hooks/useEMICalculator';
import axios from "axios";
import '../Styles/Home.css';
export default function Home() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [years, setYears] = useState(5);
  const [currency, setCurrency] = useState('USD');
  const [convertedEMI, setConvertedEMI] = useState(null);
  const [convertedSchedule, setConvertedSchedule] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const { emi, schedule } = useEMICalculator(loanAmount, interestRate, years);
  const [showResults, setShowResults] = React.useState(false);
  const handleCalculate = async () => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/97d6a36917bc306c5ee20385/latest/USD`);
      const rate = response.data.conversion_rates[currency];
      const emiInCurrency = (emi * rate).toFixed(2);
      const scheduleInCurrency = schedule.map(row => ({
        ...row,
        principal: (parseFloat(row.principal) * rate).toFixed(2),
        interest: (parseFloat(row.interest) * rate).toFixed(2),
        balance: (parseFloat(row.balance) * rate).toFixed(2),
      }));
      setConvertedEMI(emiInCurrency);
      setConvertedSchedule(scheduleInCurrency);
      setShowResult(true);
    } catch (error) {
      console.error("Error fetching exchange rate", error);
      alert("Failed to fetch exchange rate. Please try again.");
    }
    setShowResults(true);

  };

  return (
    <div className="main-container">
    <Container>
      <Typography variant="h4" gutterBottom padding={2}>
        Loan Calculator Dashboard
      </Typography>
      <Box display="flex" gap={2} flexWrap="wrap" my={2}>
      
        <TextField
          required
          label="Loan Amount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(+e.target.value)}
        />
        <TextField
          required
          label="Interest Rate (%)"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(+e.target.value)}
        />
        <TextField
          required
          label="Term (Years)"
          type="number"
          value={years}
          onChange={(e) => setYears(+e.target.value)}
        />
       
      </Box>
      <Button variant="contained" onClick={handleCalculate}>Calculate</Button>
      <Typography variant="h6" mt={2}>
            Monthly EMI: {convertedEMI} {currency}
          </Typography>
      
      <Box 
  my={3} 
  sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexWrap: 'wrap',
    gap: 2 // spacing between elements
  }}
> {showResults && (<>
  <FormControl>
    <InputLabel id="currency-label">Currency</InputLabel>
    <Select
      labelId="currency-label"
      id="currency-select"
      label="Currency"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
    >
      <MenuItem value="USD">USD</MenuItem>
      <MenuItem value="EUR">EUR</MenuItem>
      <MenuItem value="INR">INR</MenuItem>
      <MenuItem value="GBP">GBP</MenuItem>
      <MenuItem value="JPY">JPY</MenuItem>
      <MenuItem value="CAD">CAD</MenuItem>
      <MenuItem value="AUD">AUD</MenuItem>

    </Select>
  </FormControl> 

  <Button
    variant="outlined"
    color="secondary"
    onClick={() => window.location.reload()}
    sx={{ width: 150, height: 50 }}
  >
    RESET TABLE
  </Button>
  </>)}
</Box>
      {showResult && (
        <>
          
          <TableComp schedule={convertedSchedule} currency={currency} />
        </>
      )}
    </Container>
    
    </div>
  );
}
