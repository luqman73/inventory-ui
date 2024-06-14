import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const useAuth = (requiredRole) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasRequiredRole, setHasRequiredRole] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await axios.get('http://inventory-be.test/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const user = response.data;

        if (user) {
          setIsAuthenticated(true);
          if(user.role && user.role.includes(requiredRole)) {
            setHasRequiredRole(true);
          } else {
            router.push('/dashboard');
          }
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        localStorage.removeItem('token');
        router.push('/login');
      }
    };

    checkAuth();
  }, [router, requiredRole]);

  return {isAuthenticated, hasRequiredRole};
};

export default useAuth;