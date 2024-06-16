import React, { useState, useEffect} from "react";
import axios from "axios";

const StaffList = () => {
    const [staffList, setStaffList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://inventory-be.test/api/staff');
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
                    <li key={staff.id}>
                        {staff.name} - {staff.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StaffList