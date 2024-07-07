import React, { useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import api from "../../api/api";

const StaffList = () => {

    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await api.get('/staff');
                setStaffList(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch staff list', error);
                setError('Failed to fetch staff list. Please try again.');
                setLoading(false);
            }
        };

        fetchStaff();
    }, []);

    const handleDeactivate = async (userId) => {
        try {
            await api.put(`/staff/${userId}/deactivate`);
            alert('User deactivate successfully');
        } catch (error) {
            console.error('Error deactivating user:', error);
            alert('Failed to deactivate user');
        }
    };

    if(loading) {
        return <p>Loading staff list</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>Staff List</h1>
            <ul>
                {staffList.map((staff) => (
                    <li key={staff.id} className="flex">
                        <div className="flex-grow">
                            <div className="flex flex-row space-x-4">
                                <div>{staff.id}</div>
                                <div>{staff.name}</div>
                                <div>{staff.email}</div>
                            </div>
                        </div>
                        <Link href={`/editStaff/${staff.id}`} className="bg-green-500 hover:bg-green-400 text-white text-sm font-semibold py-2 px-3 rounded shadow-sm mr-2">Edit</Link>
                        <button className="bg-red-500 hover:bg-red-400 text-white text-sm font-semibold py-2 px-3 rounded shadow-sm mr" onClick={() => handleDeactivate(staff.id)}>Deactivate</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaffList