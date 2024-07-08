import ColorDropdown from "./ColorDropdown";

const AddProductForm = () => {
    return (
        <div>
            <div>Add a product form</div>
            <form action="">
                <div>
                    <div className="mb-4">
                        <label htmlFor="model_name">Model Name</label>
                        <div className='mt-2'>
                            <input type="text"
                                placeholder="Model Name"
                                className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div  className="mb-4">
                        <label htmlFor="storage_capacity">Storage capacity</label>
                        <div className='mt-2'>
                            <input type="text"
                                placeholder="Model Name"
                                className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div>
                        Color Dropdown
                        <div>
                            <ColorDropdown/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default AddProductForm;