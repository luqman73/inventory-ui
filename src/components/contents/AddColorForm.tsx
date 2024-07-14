"use client"
import api from 'src/api/api';
import { useState } from 'react';

const AddColorForm = () => {

    const [name, setColor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post('/color', {name});
            alert("Color added successfully!");
        } catch (error) {
            console.log('Adding color failed', error);
            alert('Adding color failed. Something went wrong');
        }
    };

    return (
        <div className="border p-6 shadow-md rounded-lg border-gray-300 w-72">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="text-lg font-medium mb-4">Add a new color</div>
                    <label htmlFor="color">
                        Color name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="color"
                            value={name}
                            onChange={(e) => setColor(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className='mt-6'>
                        <button
                            type="submit"
                            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddColorForm;