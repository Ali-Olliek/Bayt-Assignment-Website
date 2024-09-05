import './main-layout.css';
import React from 'react';
function MainLayout({ children }: { children: React.ReactNode }) {
  return <div className='main'>{children}</div>;
}

export default MainLayout;
