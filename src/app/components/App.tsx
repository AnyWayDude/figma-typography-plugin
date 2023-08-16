import React, { useState } from 'react';
import '../styles/ui.css';
import ScanCard from './ScanCard';
import { Box, Typography } from '@mui/material';
import ScannedElements from './ScannedElements';

// interface Props {
//   id: string;
//   text: string;
//   name: string;
// }

function App() {
  const [textNodeCollection, setTextNodeCollection] = useState([]);
  const [scanResult, setScanResult] = useState([]);
  const [frameName, setFrameName] = useState('');

  const scanOnClick = () => {
    setScanResult(textNodeCollection);
    //send message to controller (plugin)
    parent.postMessage({ pluginMessage: { type: 'scanFrame' } }, '*');
  };

  React.useEffect(() => {
    //Get a message from the controller
    const onMessageListener = (msg: MessageEvent) => {
      const { type, textNodes, frameName } = msg.data.pluginMessage;
      if (type === 'display-text-nodes') {
        console.log('get data in react', textNodes);
        console.log('Frame name:', frameName);
        setFrameName(frameName);
        setTextNodeCollection(textNodes);
        setScanResult([]);
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
        {textNodeCollection.length === 0 && frameName !== '' ? (
          <Typography sx={{ textAlign: 'center', mt: 2, fontSize: '30px', fontWeight: '700' }}>
            Font in selected frame is okay
          </Typography>
        ) : (
          scanResult.map((textNode) => <ScannedElements key={textNode.id} data={textNode} />)
        )}
      </Box>
    </div>
  );
}

export default App;
