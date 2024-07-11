import ColorDropdown from "./ColorDropdown";

const AddProductForm = () => {
    return (
        <div>
            <div className="text-lg font-medium">Add a product</div>
            <form action="" className="w-full">
                <div>
                    <div className="mb-4">
                        <label htmlFor="model_name">Model Name</label>
                        <div className="mt-2">
                            <input type="text"
                                placeholder="iPhone 15"
                                className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div  className="mb-4">
                        <label htmlFor="storage_capacity">Storage capacity</label>
                        <div className='mt-2'>
                            <input type="text"
                                placeholder="128GB"
                                className='block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="color">Color variation</label>
                        <div className="mt-2">
                            <ColorDropdown/>
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