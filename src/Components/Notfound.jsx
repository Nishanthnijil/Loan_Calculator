

import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => (
  <Box textAlign="center" mt={25}>
    <Typography variant="h2" gutterBottom>404</Typography>
    <Typography variant="h5">Page Not Found</Typography>
    <Typography variant="body1">The page you are looking for does not exist.</Typography>
  </Box>
);

export default NotFound;
