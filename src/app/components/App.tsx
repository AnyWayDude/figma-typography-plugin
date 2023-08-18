import React, { useState } from 'react';
import '../styles/ui.css';
import ScanFrame from './ScanFrame';
import { Box } from '@mui/material';
import { filterTextNodes } from '../helpers/filterTextNodes';
import { MyTextNode } from '../types';
import ScanResultPunel from './ScanResultsPanel';

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
        <ScanFrame frameName={frameName} onClick={scanOnClick} disabled={textNodeCollection.length === 0} />
      </Box>
      <ScanResultPunel data={scanResult} frameName={frameName} collection={textNodeCollection} />
    </div>
  );
}

export default App;
