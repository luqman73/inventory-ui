"use client"

import Navbar from "src/components/layouts/NavBar";
import Sidebar from "src/components/layouts/Sidebar";

export default function productLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex flex-col">
            <Navbar/>
            <div className="flex flex-1 overflow-hidden">
                <div className="w-64">
                    <Sidebar/>
                </div>
                <div className="flex-1 p-6 overflow-auto">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}