import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Items from './pages/Items';
import Swaps from './pages/Swaps';
import Profile from './pages/Profile';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import NatureIcon from '@mui/icons-material/Nature';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static" sx={{ backgroundColor: '#2E7D32' }}>
        <Toolbar>
          <NatureIcon sx={{ mr: 1 }} />
          <Typography variant="h6" style={{ flexGrow: 1, fontWeight: 'bold' }}>
            EcoSwapHub
          </Typography>
          <Button color="inherit" component={Link} to="/ecoswaphub/">Home</Button>
          <Button color="inherit" component={Link} to="/ecoswaphub/items">Items</Button>
          <Button color="inherit" component={Link} to="/ecoswaphub/swaps">Swaps</Button>
          <Button color="inherit" component={Link} to="/ecoswaphub/profile">Profile</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box my={4}>
          <Routes>
            <Route path="/ecoswaphub/" element={<Home />} />
            <Route path="/ecoswaphub/items" element={<Items />} />
            <Route path="/ecoswaphub/swaps" element={<Swaps />} />
            <Route path="/ecoswaphub/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;