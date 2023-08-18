import React from 'react';
import Card from '@mui/material/Card';
import { Box, IconButton, Typography } from '@mui/material';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';

interface prorps {
  onClick: () => void;
  disabled: boolean;
  frameName: string;
}

const ScanFrame = ({ onClick, disabled, frameName }: prorps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: '5px',
        mb: '10px',
        border: '4px #EBEBEB solid',
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
        <Typography sx={{ fontSize: 22, p: 2, fontWeight: '300' }} variant="h6">
          {frameName ? `Frame name: ${frameName}` : 'Choose frame to scan'}
        </Typography>
      </Card>
      <IconButton
        aria-label="scan"
        onClick={onClick}
        disabled={disabled}
        sx={{
          color: '#003660',
        }}
      >
        <DocumentScannerOutlinedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default ScanFrame;
