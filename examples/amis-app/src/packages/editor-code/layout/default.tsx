import React from 'react';
import { LayoutInterface } from './interface';

const DefaultLayout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <div>
      {/* You can add any default styling or structure here */}
      {children}
    </div>
  );
};

export default DefaultLayout;
