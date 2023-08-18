import React from 'react';
import { Box } from '@mui/material';
import { MyTextNode } from '../types';
import ScannedElements from './ScannedElements';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FontDownloadOffOutlinedIcon from '@mui/icons-material/FontDownloadOffOutlined';
import ScanResultInfo from './ScanResultInfo';

interface Props {
  data: MyTextNode[];
  frameName: string;
  collection: MyTextNode[];
}

const ScanResultPunel = ({ data, frameName, collection }: Props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {!frameName && (
        <ScanResultInfo icon={<HighlightAltIcon fontSize="inherit" />} severity={'info'}>
          Nothing selected. <strong>Select a frame to scan it</strong>
        </ScanResultInfo>
      )}
      {data === null ? null : data.length === 0 ? (
        <ScanResultInfo icon={<ThumbUpOffAltIcon fontSize="inherit" />} severity={'success'}>
          Font in selected frame is okay
        </ScanResultInfo>
      ) : (
        data.map((textNode) => <ScannedElements key={textNode.id} data={textNode} />)
      )}
      {frameName && collection.length === 0 && (
        <ScanResultInfo icon={<FontDownloadOffOutlinedIcon fontSize="inherit" />} severity={'info'}>
          There are no text elements. <strong>Select frame with text elements</strong>
        </ScanResultInfo>
      )}
    </Box>
  );
};

export default ScanResultPunel;
