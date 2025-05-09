import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

// This component checks if the user is authenticated by checking the presence of a username in localStorage
const ProtectedRoute = () => {
  const username = localStorage.getItem('username');
  return username ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;