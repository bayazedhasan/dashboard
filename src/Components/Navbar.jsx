import React from 'react';
import { FiBell } from 'react-icons/fi';
import { Link, useLocation } from 'react-router';

const Navbar = () => {

    const location = useLocation();

    const getTitle = (pathname) => {
        switch (pathname) {
            case '/':
                return 'Dashboard Overview';
            case '/call-logs':
                return 'Call Logs';
            case '/booking':
                return 'Booking';
            case '/appointments':
                return 'Appointments';
            case '/settings':
                return 'Settings';
            case '/settings/edit':
                return 'Edit Profile';
            default:
                return 'Dashboard Overview';
        }
    };

    const title = getTitle(location.pathname);
    return (
        <div className="bg-[#111B3C] sticky top-0 z-10">
            <div className="px-6 py-2 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold text-white">{title}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className=" p-2 hover:bg-card rounded-lg transition-all">
                        <FiBell className="w-5 h-5 text-white" />
                    </button>
                    <div >
                        <Link to="/settings">
                        <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;