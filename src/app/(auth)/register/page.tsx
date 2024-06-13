"use client"

import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import axios from 'axios';
import Header from 'src/components/Header';

const RegisterStaff = () => {
    const isAuthenticated = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    if (!isAuthenticated) {
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
            <Header/>
            <div className='flex justify-center bg-orange-100'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
                <button type="submit">Register Staff</button>
            </form>
        </div>
        </div>
    );
};

export default RegisterStaff;
