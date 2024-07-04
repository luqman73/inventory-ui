"use client"

import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import axios from "axios";

const EditStaff = () => {
    const { userId } = useParams();


    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
    });

    useEffect(() => {
        // Fetch user data based on userId when component mounts
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://inventory-be.test/api/staff/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]); // Only re-run the effect if userId changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevDetail) => ({
            ...prevDetail,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://inventory-be.test/api/staff/${userId}/update`, user);
            console.log("User updated successfully:", response.data)
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className='block text-sm font-medium leading-6 text-gray-900'>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        required
                    />
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-400 text-white text-sm font-semibold py-2 px-3 rounded shadow-sm">Update</button>
            </form>
        </div>
    )
};

export default EditStaff;