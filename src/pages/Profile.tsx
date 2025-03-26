import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface UserSwap {
  username: string;
  itemsSwapped: string[];
  co2Saved: number;
}

const userSwaps: UserSwap[] = [
  { username: 'User2', itemsSwapped: ['Bookshelf', 'Laptop'], co2Saved: 15 },
  { username: 'User3', itemsSwapped: ['Bookshelf', 'Laptop'], co2Saved: 15 },
  { username: 'User4', itemsSwapped: ['Laptop'], co2Saved: 10 },
];

const Profile: React.FC = () => {
  return (
    <Box sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Swap Community
      </Typography>
      {userSwaps.length === 0 ? (
        <Typography>No swaps yet.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Items Swapped</TableCell>
                <TableCell>CO2 Saved (kg)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userSwaps.map(user => (
                <TableRow key={user.username}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.itemsSwapped.join(', ')}</TableCell>
                  <TableCell>{user.co2Saved}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Profile;