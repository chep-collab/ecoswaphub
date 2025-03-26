import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface SwapRequest {
  id: number;
  itemId: number;
  requester: string;
  owner: string;
  status: string;
}

const initialSwapRequests: SwapRequest[] = [
  { id: 1, itemId: 1, requester: 'User3', owner: 'User2', status: 'accepted' },
  { id: 2, itemId: 2, requester: 'User4', owner: 'User3', status: 'accepted' },
];

const Swaps: React.FC = () => {
  const [swapRequests, setSwapRequests] = useState<SwapRequest[]>(initialSwapRequests);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Request ID', width: 150 },
    { field: 'itemId', headerName: 'Item ID', width: 150 },
    { field: 'requester', headerName: 'Requester', width: 150 },
    { field: 'owner', headerName: 'Owner', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>Swap Requests</Typography>
      {swapRequests.length === 0 ? (
        <Typography>No swap requests yet.</Typography>
      ) : (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={swapRequests} columns={columns} pageSize={5} />
        </div>
      )}
    </Box>
  );
};

export default Swaps;