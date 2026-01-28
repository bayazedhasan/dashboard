import React from 'react';
import { FiHome, FiPhone, FiCalendar, FiSettings } from 'react-icons/fi';
import { IoIosLogOut } from 'react-icons/io';
import { NavLink } from 'react-router';

const Sidebar = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Dashboard Overview',
            icon: FiHome, path: '/',
            color: '#FFFFFF'
        },
        {
            id: 2,
            name: 'Call Logs',
            icon: FiPhone,
            path: '/call-logs',
            color: '#FFFFFF'
        },
        {
            id: 3,
            name: 'Appointments',
            icon: FiCalendar,
            path: '/appointments',
            color: '#FFFFFF'
        },
        {
            id: 4,
            name: 'Settings',
            icon: FiSettings,
            path: '/settings',
            color: '#FFFFFF'
        },
    ];

    return (
        <div className="w-64 bg-[#111B3C] h-screen fixed left-0 top-0 border-r border-[#2B7FFF33] flex flex-col">

            <div className='flex justify-center py-10 items-center '>
                <img className='w-12 h-12' src="Container.png" alt="" />
            </div>


            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${isActive
                                        ? ' text-[#FFFFFF] text-[16px] font-medium  bg-[#111B3C] shadow-[inset_0_0_14px_#D2EAFF]'
                                        : 'text-[#FFFFFF] text-[16px] font-medium '
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon
                                            className="w-5 h-5"
                                            style={{ color: isActive ? item.color : undefined }}
                                        />
                                        <span className="font-medium">{item.name}</span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* User Info */}
            <div className='flex items-center gap-3 p-4'>
                <IoIosLogOut   className='text-black text-4xl font-bold'/>
                <p className='text-[#FF1100] text-[16px] font-medium'>Log Out</p>
            </div>
        </div>
    );
};

export default Sidebar;
