import React from 'react';
import Card from '@mui/material/Card';
import { Box, IconButton, Typography } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

interface prorps {
  onClick: () => void;
  disabled: boolean;
  frameName: string;
}

const ScanCard = ({ onClick, disabled, frameName }: prorps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: '5px',
        mb: '10px',
        border: '3px #EBEBEB solid',
        borderStyle: 'solid none solid none',
        borderRadius: 2,
      }}
    >
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minWidth: 300,
          boxShadow: 'none',
          borderRadius: 2,
        }}
      >
        <Typography sx={{ fontSize: 18, p: 2, fontWeight: '500' }} variant="h6">
          {frameName ? `Frame name: ${frameName}` : 'Choose frame to scan'}
        </Typography>
      </Card>
      <IconButton aria-label="scan" onClick={onClick} disabled={disabled}>
        <ManageSearchIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ScanCard;
