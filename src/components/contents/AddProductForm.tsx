"use client";
import ColorDropdown from "./ColorDropdown";
import { useState } from "react";
import api from "src/api/api";

const AddProductForm = () => {
    const [model_name, setModelName] = useState('');
    const [storage_capacity, setStorageCapacity] = useState('');
    const [color_id, setColorId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post('/product', {
                model_name,
                storage_capacity,
                color_id
            });
            alert("Product added succesfully!");
        } catch (error) {
            console.error("Failed to add product", error);
            alert("Failed to add product")
        }
    };

    return (
        <div className="border rounded-lg p-6 shadow-md w-3/5 border-gray-300">
            <div className="text-lg font-medium mb-4">Add a new product</div>
            <form onSubmit={handleSubmit} className="w-full"> 
                <div>
                    <div className="mb-4">
                        <label htmlFor="model_name">Model Name</label>
                        <div className="mt-2">
                            <input type="text"
                                placeholder="iPhone 15"
                                value={model_name}
                                onChange={(e) => setModelName(e.target.value)}
                                className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div  className="mb-4">
                        <label htmlFor="storage_capacity">Storage capacity</label>
                        <div className='mt-2'>
                            <input type="text"
                                placeholder="128GB"
                                value={storage_capacity}
                                onChange={(e) => setStorageCapacity(e.target.value)}
                                className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="color">Color variation</label>
                        <div className="mt-2">
                            <ColorDropdown
                                color_id={color_id}
                                onColorChange={setColorId}
                            />
                        </div>
                    </div>
                    <div className='mt-6'>
                        <button
                            type="submit"
                            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default AddProductForm;