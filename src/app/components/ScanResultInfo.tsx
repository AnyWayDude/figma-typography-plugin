import React from 'react';
import { Alert, AlertColor } from '@mui/material';

type Props = {
  children: React.ReactNode;
  severity: AlertColor;
  icon: React.ReactNode;
};

const ScanResultInfo = ({ icon, severity, children }: Props) => {
  return (
    <Alert icon={icon} severity={severity}>
      {children}
    </Alert>
  );
};

export default ScanResultInfo;
