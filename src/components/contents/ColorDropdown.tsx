"use client";
import { useState, useEffect } from "react";
import api from "src/api/api";

const ColorDropdown = () => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        //Fetch colors from the API
        const fetchColors = async () => {
            try {
                const response = await api.get('/colors');
                setColors(response.data);
            } catch (error) {
                console.error('Failed to fetch colors', error);
            }
        };

        fetchColors();
    }, []);

    return (
        <div className="inline-block text-left">
            <div className="flex items-center">
                <div className="mt-2 bg-white border rounded-md shadow-md">
                    <select name="color" id="color" className="form-select">
                        {colors.map((color, index) => (
                            <option key={index} value={color.name}>{color.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ColorDropdown;
