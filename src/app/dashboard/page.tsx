"use client"

import useAuth from '@/hooks/useAuth';
import Sidebar from 'src/components/layouts/Sidebar';
import Navbar from 'src/components/layouts/NavBar';

const DashboardPage = () => {
  const isAuthenticated = useAuth(['admin', 'staff']);

  console.log("from dashboard");
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