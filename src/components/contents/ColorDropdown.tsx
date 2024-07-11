"use client"
    ;
import { useState, useEffect } from "react";
import api from "src/api/api";
import Modal from "./Modal";

const ColorDropdown = () => {
    const [colors, setColors] = useState([]);
    const [newColor, setNewColor] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const handleNewColorSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/colors', { color: newColor });
            setColors([...colors, response.data.color]);
            setNewColor('');
            setIsModalVisible(false);
            alert('color added successfully!');

        } catch (error) {
            console.error('Error adding color:', error);
            alert('Error adding color.');
        }
    };


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
                <button
                    className="w-64 border rounded-md px-4 py-1 shadow-md hover:bg-gray-50 focus:outline-none flex items-center text-sm font-medium text-gray-700"
                    type="button" onClick={() => setIsModalVisible(true)}
                >
                    Add new color
                </button>
            </div>
       
            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
                <form onSubmit={handleNewColorSubmit}>
                    <label htmlFor="newColor">New Color:  </label>
                    <input
                        type="text"
                        id="newColor"
                        value={newColor}
                        onChange={(e) => setNewColor(e.target.value)}
                        className="form-input rounded-md px-4 py-1 shadow-md border border-gray-300"
                        required
                    />
                    <button
                        type="submit"
                        className="ml-2 border rounded-md px-4 py-1 mt-5 shadow-md hover:bg-gray-50 focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </Modal>

        </div>
    );
};

export default ColorDropdown;
