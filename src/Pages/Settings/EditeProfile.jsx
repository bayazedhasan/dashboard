import React, { useState, useEffect } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { useUser } from '../../Context/UserContext';


const EditeProfile = () => {
    const { user, updateUser } = useUser();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(user);
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        updateUser(formData);
        navigate('/settings');
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, profileImage: imageUrl }));
        }
    };

    return (
        <div className='bg-[#162456]'>
            <div className="p-6 md:p-10">
                <div className="flex items-center border-b border-[#2B7FFF33] gap-8 mb-8">
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
                    <div className="max-w-5xl">


                        <p className="text-gray-300 mb-4 text-lg">Profile Image</p>


                        <div className="flex items-center gap-6 mb-8">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-transparent">
                                    <img
                                        src={formData.profileImage}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <button
                                    onClick={() => document.getElementById('edit-profile-upload').click()}
                                    className="absolute bottom-0 right-0 bg-[#7AA3CC] p-2 rounded-lg text-white  transition-all shadow-lg hover:scale-105 cursor-pointer"
                                >
                                    <FiEdit className="w-4 h-4 text-[#FFFFFF]" />
                                </button>
                                <input
                                    type="file"
                                    id="edit-profile-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="space-y-2">
                                <label className="text-white text-base">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-[#111827] text-gray-300 border border-[#00FF8833] rounded-xl px-4 py-2 focus:outline-none focus:border-[#00FF8833] focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-white text-base">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#111827] text-gray-300 border border-[#00FF8833] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF8833] focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-white text-base">Store Name</label>
                                <input
                                    type="text"
                                    name="storeName"
                                    value={formData.storeName}
                                    onChange={handleChange}
                                    className="w-full bg-[#111827] text-gray-300 border border-[#00FF8833] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF8833] focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-white text-base">Store Address</label>
                                <input
                                    type="text"
                                    name="storeAddress"
                                    value={formData.storeAddress}
                                    onChange={handleChange}
                                    className="w-full bg-[#111827] text-gray-300 border border-[#00FF8833] rounded-xl px-4 py-3 focus:outline-none focus:border-[#00FF8833] focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                />
                            </div>
                        </div>


                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={handleSave}
                                className="bg-[#00C950] hover:bg-[#00c968] text-white font-bold py-3 px-24 rounded-xl transition-all shadow-lg transform hover:scale-105"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-4xl h-screen">
                        <p className="text-[#FFFFFF]">Password settings content goes here...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditeProfile;
