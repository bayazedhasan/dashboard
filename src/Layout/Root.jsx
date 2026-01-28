import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';



const Root = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} />

            
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            <div className="flex-1 ml-0 lg:ml-64 flex flex-col overflow-hidden transition-all duration-300">
                <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Root;