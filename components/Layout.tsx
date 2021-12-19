import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="layout flex flex-col items-center">
        <main className="max-w-3xl py-5">{children}</main>
      </div>
    </>
  );
};

export default Layout;
