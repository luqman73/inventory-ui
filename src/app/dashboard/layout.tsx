"use client"

import Navbar from "src/components/layouts/NavBar";
import Sidebar from "src/components/layouts/Sidebar";

export default function registerLayout({
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
                    {children}
                </div>
            </div>
        </div>
    );
}