"use client"

import { useEffect } from 'react';
import useAuth from '@/hooks/useAuth';
import Header from 'src/components/Header';

const DashboardPage = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header/>
      <h1>Dashboard</h1>
      {/* Your dashboard content here */}
      <p>you are authorized user!</p>
    </div>
  );
};

export default DashboardPage;