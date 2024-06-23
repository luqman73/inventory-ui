"use client"

import Navbar from "src/components/layouts/NavBar";
import Sidebar from "src/components/layouts/Sidebar";

export default function registerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Navbar/>
            <div className="flex min-h-screen">
                <div className="w-64">
                    <Sidebar/>
                </div>
                <div className="flex-1 p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}