import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="h-screen">
           <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="https://img.logoipsum.com/243.svg" className="w-64" alt="" />
                </div>

                <ul className="flex flex-col bg-slate-100">
                    <li className="hover:bg-blue-300 block p-3 rounded">
                        <Link href="/dashboard" className="text-xl">Dashboard</Link>
                    </li>
                    <li className="hover:bg-blue-300 block p-3 rounded">
                        <Link href="/inventory" className="text-xl">Inventory</Link>
                    </li>
                    <li className="hover:bg-blue-300 block p-3 rounded">
                        <Link href="/register" className="text-xl">Register</Link>
                    </li>
                </ul>
           </nav>
        </aside>
    );
};

export default Sidebar