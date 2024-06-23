"use client"

import useAuth from '@/hooks/useAuth';
import { useState } from 'react';
import axios from 'axios';
import Navbar from 'src/components/layouts/NavBar';
import StaffList from 'src/components/contents/StaffList';
import Sidebar from 'src/components/layouts/Sidebar';

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
            <form onSubmit={handleSubmit} className='bg-purple-300'>
                <div className='flex flex-col max-w-xl m-8 p-8 rounded-xl bg-teal-100'>
                    <div className='mb-4'>
                        <label htmlFor="name" className='block text-sm font-medium leading-6 text-gray-900'>Name</label>
                        <div className='mt-2'>
                            <input type="text" placeholder="John" value={name} onChange={(e) => setName(e.target.value)} className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
                        <div className='mt-2'>
                            <input type="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
                        <div className='mt-2'>
                            <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="passwordConfirmation" className='block text-sm font-medium leading-6 text-gray-900'>Confirm Password</label>
                        <div className='mt-2'>
                            <input type="password" placeholder="********" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <button type="submit" className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Register Staff</button>
                    </div>
                </div>
            </form>
            <div className='bg-orange-50'>
                <StaffList />
            </div>
        </div>
    );
};

export default RegisterStaff;
