import React from 'react';
import { ControlsProvider } from './ControlsContext';

const BaseProvider = ({ children }: { children: React.ReactNode }) => {
  return <ControlsProvider>{children}</ControlsProvider>;
};

export default BaseProvider;
