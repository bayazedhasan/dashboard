import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';


const Profile = () => {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="p-6">

            <div className="flex items-center gap-8 mb-8">
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`pb-4 text-[16px] font-medium transition-all relative ${activeTab === 'profile'
                        ? 'text-primary'
                        : 'text-[#FFFFFF] hover:text-primary'
                        }`}
                >
                    Profile
                    {activeTab === 'profile' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                    )}
                </button>
                <button
                    onClick={() => setActiveTab('password')}
                    className={`pb-4 text-[16px] font-medium transition-all relative ${activeTab === 'password'
                        ? 'text-primary'
                        : 'text-[#FFFFFF] hover:text-primary'
                        }`}
                >
                    Password Settings
                    {activeTab === 'password' && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                    )}
                </button>
            </div>

            {activeTab === 'profile' ? (
                <div className="max-w-4xl">
                    <p className="text-[#FFFFFF] mb-6">Profile Image</p>


                    <div className="flex items-center gap-6 mb-10">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-blue-500 transition-colors">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                        <Link to="/edite">
                            <button
                                className="bg-[#111B3C] shadow-[inset_0_0_18px_#D2EAFF] mt-10 text-white px-3 py-1 rounded-xl  text-[10px] flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                            >
                                Edite Profile
                            </button>
                        </Link>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-center border-b border-gray-800 pb-6">
                            <label className="text-[#FFFFFF] font-medium">Full Name:</label>
                            <div className="text-gray-300">{user.fullName}</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-center border-b border-gray-800 pb-6">
                            <label className="text-[#FFFFFF] font-medium">Email:</label>
                            <div className="text-gray-300">{user.email}</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-center border-b border-gray-800 pb-6">
                            <label className="text-[#FFFFFF] font-medium">Store Name:</label>
                            <div className="text-gray-300">{user.storeName}</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 items-center border-gray-800 pb-6">
                            <label className="text-[#FFFFFF] font-medium">Store Address:</label>
                            <div className="text-gray-300">{user.storeAddress}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-4xl h-screen">
                    <p className="text-[#FFFFFF]">Password settings content goes here...</p>
                </div>
            )}
        </div>
    );
};

export default Profile;