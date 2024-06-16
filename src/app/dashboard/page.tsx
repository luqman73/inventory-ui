"use client"

import useAuth from '@/hooks/useAuth';
import Navbar from 'src/components/NavBar';

const DashboardPage = () => {
  const isAuthenticated = useAuth(['admin', 'staff']);

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar/>
      <h1>Dashboard</h1>
      {/* Your dashboard content here */}
      <p>you are authorized user!</p>
    </div>
  );
};

export default DashboardPage;