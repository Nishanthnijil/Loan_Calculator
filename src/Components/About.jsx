// src/Components/About.jsx
import React from "react";
import { Box, Container, Typography, List, ListItem, Divider } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 4 , mt:6}}>
      <Typography variant="h4" gutterBottom>
        Loan Calculator Dashboard
      </Typography>

      <Typography variant="h6" gutterBottom>Contents:</Typography>
      <List dense>
        <ListItem>1. Important Links</ListItem>
        <ListItem>2. Overview</ListItem>
        <ListItem>3. Features</ListItem>
        <ListItem>4. Technologies used</ListItem>
        <ListItem>5. Setup Instruction</ListItem>
        <ListItem>6. Formula Used</ListItem>
        <ListItem>7. Sample Screenshots</ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">1. Important Links:</Typography>
      <Typography>• GitHub Repository: <a href="https://github.com/Nishanthnijil/Loan_Calculator" target="_blank" rel="noopener noreferrer">Click here</a></Typography>
      <Typography>• Live Project Link: <a href="https://loancalculator-48dea.web.app/" target="_blank" rel="noopener noreferrer">Click here</a></Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">2. Overview:</Typography>
      <Typography paragraph>
        A modern, responsive single-page application built with React JS and Material UI.
        It allows users to calculate EMIs (Equated Monthly Installments), view a detailed amortization schedule,
        and see real-time currency conversions using live exchange rates.
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">3. Features:</Typography>
      <List dense>
        <ListItem>• Loan EMI calculation using financial formulas</ListItem>
        <ListItem>• Dynamic amortization schedule with monthly breakdown</ListItem>
        <ListItem>• Real-time currency conversion via Exchange Rate API</ListItem>
        <ListItem>• Paginated table for 160+ currencies</ListItem>
        <ListItem>• Dark/Light mode toggle (Material UI theming)</ListItem>
        <ListItem>• Fully responsive UI with collapsible header on mobile</ListItem>
        <ListItem>• 404 Not Found and graceful error pages</ListItem>
        <ListItem>• Custom React Hooks for reusable logic</ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">4. Technologies Used:</Typography>
      <List dense>
        <ListItem>• React (with Hooks, Context API, Router)</ListItem>
        <ListItem>• Material UI (MUI v5)</ListItem>
        <ListItem>• Axios (for API calls)</ListItem>
        <ListItem>• Exchange Rate API</ListItem>
        <ListItem>• React Router DOM</ListItem>
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">5. Setup Instructions:</Typography>
      <Typography>5.1. Clone the repo:</Typography>
      <Box component="pre" sx={{ ml: 2, fontSize: 14, p: 1, borderRadius: 1 }}>
        git clone https://github.com/yourusername/loan-calculator-app.git{"\n"}
        cd loan-calculator-app
      </Box>

      <Typography>5.2. Install dependencies:</Typography>
      <Box component="pre" sx={{ ml: 2, fontSize: 14,  p: 1, borderRadius: 1 }}>
        npm install
      </Box>

      <Typography>5.3. Replace API Key:</Typography>
      <Typography variant="body2" sx={{ ml: 2 }}>
        Replace the API key in the code with your actual key from{" "}
        <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">
          exchangerate-api.com
        </a>
      </Typography>

      <Typography>5.4. Run the App:</Typography>
      <Box component="pre" sx={{ ml: 2, fontSize: 14,  p: 1, borderRadius: 1 }}>
        npm run dev
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">6. Formula Used:</Typography>
      <Typography paragraph>
        <strong>EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]</strong>
      </Typography>
      <Typography paragraph>
        Where:
        <br />• P = Loan amount
        <br />• R = Monthly interest rate = (annual rate / 12 / 100)
        <br />• N = Loan duration in months
      </Typography>

      <Divider sx={{ my: 2 }} />
    </Container>
  );
}
