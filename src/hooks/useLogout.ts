import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useLogout = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const logout = () => {
    if (isMounted) {
      // Remove the token from localStorage
      localStorage.removeItem('token');
      
      // Redirect to login page
      router.push('/login');
    }
  };

  return logout;
};

export default useLogout;
