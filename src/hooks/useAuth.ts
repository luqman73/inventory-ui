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
          const isActiveUser = user.status === 'active';
          setIsAuthenticated(true);

          if (requiredRole.includes(user.role)) {
            setHasRequiredRole(true);
          } else {
            router.push('/dashboard');
          }

          if (!isActiveUser) {
            localStorage.removeItem('token');
            router.push('/login');
            alert('User no longer active');

            return;
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

  return { isAuthenticated, hasRequiredRole };
};

export default useAuth;