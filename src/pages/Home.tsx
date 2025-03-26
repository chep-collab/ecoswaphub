import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h3" gutterBottom color="primary">
        Welcome to EcoSwapHub
      </Typography>
      <Typography variant="h6" gutterBottom>
        Swap items, save the planet, and reduce your carbon footprint!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/ecoswaphub/items"
        sx={{ mt: 2 }}
      >
        Start Swapping
      </Button>
    </Box>
  );
};

export default Home;