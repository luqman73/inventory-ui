"use client";
import { useState, useEffect } from "react";
import api from "src/api/api";

const ColorDropdown = ({ color_id, onColorChange}) => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
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
                    <select
                        name="color_id"
                        id="color"
                        className="form-select"
                        value={color_id}
                        onChange={(e) => onColorChange(e.target.value)}
                    >
                        {colors.map((color) => (
                            <option key={color.id} value={color.id}>
                                {color.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ColorDropdown;
