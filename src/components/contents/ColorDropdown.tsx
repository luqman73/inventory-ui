const ColorDropdown = () => {

    return (
        <div>
            <div className="relative inline-block text-left">
                <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                    Color
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.684l3.71-3.498a.75.75 0 011.08 1.04l-4 3.75a.75.75 0 01-1.08 0l-4-3.75a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="w-48 bg-white border rounded-md shadow-lg">
                <ul>
                    <li className="px-4 py-1 hover:bg-gray-200">Red</li>
                    <li className="px-4 py-1 hover:bg-gray-200">Green </li>
                    <li className="px-4 py-1 hover:bg-gray-200">Blue</li>
                </ul>
            </div>
        </div>
    );
};

export default ColorDropdown;