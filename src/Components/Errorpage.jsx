import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Styles/ErrorPage.css';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page-container">
      <Typography variant="h4" gutterBottom>
        Something went wrong in the application.
      </Typography>
      <Button variant="outlined" onClick={() => navigate('/')}>
        GO HOME
      </Button>
    </div>
  );
}
