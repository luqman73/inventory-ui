"use client"

import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';

const DashboardPage = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Your dashboard content here */}
      <p>you are authorized user!</p>
    </div>
  );
};

export default DashboardPage;