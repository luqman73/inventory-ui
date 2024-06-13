"use client"

import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://inventory-be.test/api/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard'); // Redirect to dashboard upon successful login
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your email and password and try again.');
    }
  };

  return (
    <div>
       <h1>Login</h1>
      <div className='flex justify-center items-center'>
        <form onSubmit={handleLogin}>
          <input className="border rounded-md border-green-500" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="border rounded-md border-green-500" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;