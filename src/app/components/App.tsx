import React, { useState } from 'react';
import '../styles/ui.css';
import ScanCard from './ScanCard';
import { Box, Typography } from '@mui/material';
import ScannedElements from './ScannedElements';
import { filterTextNodes } from '../helpers/filterTextNodes';
import { MyTextNode } from '../types';

function App() {
  const [textNodeCollection, setTextNodeCollection] = useState([]);
  const [scanResult, setScanResult] = useState<MyTextNode[] | null>(null);
  const [frameName, setFrameName] = useState(null);

  const scanOnClick = () => {
    const filteredScanResult = filterTextNodes(textNodeCollection, 10);
    setScanResult(filteredScanResult);
    //send message to controller (plugin)
    // parent.postMessage({ pluginMessage: { type: 'scanFrame' } }, '*');
  };

  React.useEffect(() => {
    //Get a message from the controller
    const onMessageListener = (msg: MessageEvent) => {
      const { type, textNodes, frameName } = msg.data.pluginMessage;
      if (type === 'display-text-nodes') {
        setFrameName(frameName);
        setTextNodeCollection(textNodes);
        setScanResult(null);
      }
    };
    window.onmessage = onMessageListener;
    return () => window.removeEventListener('onmessage', onMessageListener);
  }, []);

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ScanCard frameName={frameName} onClick={scanOnClick} disabled={textNodeCollection.length === 0} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {!frameName && (
          <Typography sx={{ textAlign: 'center', mt: 2, fontSize: '30px', fontWeight: '700' }}>
            Nothing is selected
          </Typography>
        )}
        {scanResult === null ? null : scanResult.length === 0 ? (
          <Typography sx={{ textAlign: 'center', mt: 2, fontSize: '30px', fontWeight: '700' }}>
            Font in selected frame is okay
          </Typography>
        ) : (
          scanResult.map((textNode) => <ScannedElements key={textNode.id} data={textNode} />)
        )}
        {frameName && textNodeCollection.length === 0 && (
          <Typography sx={{ textAlign: 'center', mt: 2, fontSize: '30px', fontWeight: '700' }}>
            There are no text elements
          </Typography>
        )}
      </Box>
    </div>
  );
}

export default App;
