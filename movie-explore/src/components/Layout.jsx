import React from 'react';
import Navbar from './Navbar';

// This component represents the main layout of the application
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;