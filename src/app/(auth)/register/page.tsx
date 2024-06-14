"use client"

import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import axios from 'axios';
import Navbar from 'src/components/NavBar';

const RegisterStaff = () => {
    const { isAuthenticated, hasRequiredRole } = useAuth('admin');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    if (!isAuthenticated || !hasRequiredRole) {
        return <p>Loading...</p>;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://inventory-be.test/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            alert('Staff registered successfully!');
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <Navbar/>
            <div className='flex justify-center bg-orange-100'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='border rounded-md border-gray-500' required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='border rounded-md border-gray-500' required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='border rounded-md border-gray-500' required />
                <input type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className='border rounded-md border-gray-500' required />
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>Register Staff</button>
            </form>
        </div>
        </div>
    );
};

export default RegisterStaff;
