import React, { useState } from 'react';
import { Typography, Grid, Button, TextField, MenuItem, Box, Snackbar, Alert } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Map from '../components/Map';

interface Item {
  id: number;
  name: string;
  category: string;
  co2Saved: number;
  user: string;
  location: { lat: number; lng: number };
}

const initialItems: Item[] = [
  { id: 1, name: 'Bookshelf', category: 'Furniture', co2Saved: 5, user: 'User2', location: { lat: -1.286389, lng: 36.817223 } },
  { id: 2, name: 'Laptop', category: 'Electronics', co2Saved: 10, user: 'User3', location: { lat: -1.2921, lng: 36.8219 } },
  { id: 3, name: 'Desk Chair', category: 'Furniture', co2Saved: 3, user: 'User4', location: { lat: -1.283333, lng: 36.816667 } },
  { id: 4, name: 'Headphones', category: 'Electronics', co2Saved: 2, user: 'User5', location: { lat: -1.295, lng: 36.82 } },
  { id: 5, name: 'Scooter', category: 'Transport', co2Saved: 8, user: 'User6', location: { lat: -1.29, lng: 36.81 } },
];

const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [newItem, setNewItem] = useState({ name: '', category: '', co2Saved: 0 });
  const [search, setSearch] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleAddItem = () => {
    if (!newItem.name || !newItem.category) {
      setSnackbarMessage('Please fill in all fields.');
      setSnackbarOpen(true);
      return;
    }

    const item: Item = {
      id: items.length + 1,
      ...newItem,
      user: 'User1',
      location: { lat: -1.2921, lng: 36.8219 },
    };

    setItems(prev => [...prev, item]);
    setNewItem({ name: '', category: '', co2Saved: 0 });
    setSnackbarMessage('Item added successfully!');
    setSnackbarOpen(true);
  };

  const handleSwapRequest = (itemId: number) => {
    console.log('Requesting swap for item ID:', itemId);
    // We'll handle swap requests in the Swaps page
    setSnackbarMessage('Swap request sent!');
    setSnackbarOpen(true);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Item', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'co2Saved', headerName: 'CO2 Saved (kg)', width: 150 },
    { field: 'user', headerName: 'Owner', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSwapRequest(params.row.id)}
        >
          Request Swap
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Items for Swap
      </Typography>
      <Box mb={3}>
        <TextField
          label="Search Items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{ bgcolor: 'white' }}
        />
      </Box>
      <Box mb={3} p={2} bgcolor="white" borderRadius={2} boxShadow={1}>
        <Typography variant="h6" gutterBottom>Add New Item</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Category"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              fullWidth
              variant="outlined"
            >
              <MenuItem value="Transport">Transport</MenuItem>
              <MenuItem value="Furniture">Furniture</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              label="CO2 Saved (kg)"
              type="number"
              value={newItem.co2Saved}
              onChange={(e) => {
                const value = e.target.value;
                setNewItem({ ...newItem, co2Saved: value ? parseInt(value) : 0 });
              }}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddItem}
              fullWidth
              sx={{ height: '100%' }}
            >
              Add Item
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor="white" borderRadius={2} boxShadow={1}>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredItems}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </Box>
      <Box mt={3}>
        <Map items={filteredItems} />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarMessage.includes('Failed') ? 'error' : 'success'}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Items;