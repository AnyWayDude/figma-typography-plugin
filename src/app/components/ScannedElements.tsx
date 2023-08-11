import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import FormatSizeIcon from '@mui/icons-material/FormatSize';

interface Props {
  data: {
    id: string;
    characters: string;
    name: string;
  };
}

const ScannedElements = ({ data }: Props) => {
  return (
    <Card sx={{ minWidth: 450, mb: 3, border: '3px #EBEBEB solid', borderRadius: 2, boxShadow: 'none' }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} gutterBottom>
          <FormatSizeIcon />
          ##{data.name}##
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ScannedElements;
