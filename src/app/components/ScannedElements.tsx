import React from 'react';
import Card from '@mui/material/Card';
import { Box, CardContent, Typography } from '@mui/material';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import styled from '@emotion/styled';

interface Props {
  data: {
    id: string;
    characters: string;
    name: string;
  };
}

const CustomCardContent = styled(CardContent)({
  paddingBottom: '16px !important',
});

const ScannedElements = ({ data }: Props) => {
  return (
    <Card
      sx={{ minWidth: 450, mb: 3, border: '3px #EBEBEB solid', borderRadius: 2, boxShadow: 'none', paddingBottom: 0 }}
    >
      <CardContent sx={{ display: 'flex', alignItems: 'center', paddingBottom: 1 }}>
        <FormatSizeIcon fontSize="large" />
        <Typography sx={{ fontSize: 18, color: '#002E47', fontWeight: '700', pl: '16px' }}>{data.name}</Typography>
      </CardContent>
      <CustomCardContent sx={{ p: '0 16px' }}>
        <Typography sx={{ fontSize: 16 }}>
          We detected a font size that is lower than 10pt. Only use it for unimportant content
        </Typography>
        <Box sx={{ backgroundColor: '#EDF7FF', p: '5px', borderRadius: 1, display: 'inline-block' }}>
          <Typography sx={{ fontSize: 16 }}>
            <strong>Fix:</strong>
            Use a font-size of 16 pt
          </Typography>
        </Box>
      </CustomCardContent>
    </Card>
  );
};

export default ScannedElements;
