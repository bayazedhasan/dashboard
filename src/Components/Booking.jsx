import React, { useState } from 'react';
import { Calendar, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { MdErrorOutline } from 'react-icons/md';

const Booking = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const totalPages = 11;

    const bookings = [
        {
            id: 1,
            clientName: 'Jane D',
            clientPhone: '01960685765',
            clientEmail: 'admin@gmail.com',
            device: 'Apple/Iphone 13pro',
            repairType: 'Screen',
            date: '02/06/2026',
            slotNo: '1',
            startTime: '09:00'
        },
        {
            id: 2,
            clientName: 'Jane D',
            clientPhone: '01960685765',
            clientEmail: 'admin@gmail.com',
            device: 'Apple/Iphone 13pro',
            repairType: 'Screen',
            date: '02/06/2026',
            slotNo: '1',
            startTime: '10:00'
        },
        {
            id: 3,
            clientName: 'Jane D',
            clientPhone: '01960685765',
            clientEmail: 'admin@gmail.com',
            device: 'Apple/Iphone 13pro',
            repairType: 'Screen',
            date: '02/06/2026',
            slotNo: '1',
            startTime: '11:00'
        },
        {
            id: 4,
            clientName: 'Jane D',
            clientPhone: '01960685765',
            clientEmail: 'admin@gmail.com',
            device: 'Apple/Iphone 13pro',
            repairType: 'Screen',
            date: '02/06/2026',
            slotNo: '1',
            startTime: '12:00'
        },
        {
            id: 5,
            clientName: 'Jane D',
            clientPhone: '01960685765',
            clientEmail: 'admin@gmail.com',
            device: 'Apple/Iphone 13pro',
            repairType: 'Screen',
            date: '02/06/2026',
            slotNo: '1',
            startTime: '02:00'
        },
        {
            id: 6,
            clientName: 'Jane D',
            clientPhone: '01960685765',
            clientEmail: 'admin@gmail.com',
            device: 'Apple/Iphone 13pro',
            repairType: 'Screen',
            date: '02/06/2026',
            slotNo: '1',
            startTime: '03:00'
        }
    ];

    const handleCopyLink = () => {
        navigator.clipboard.writeText('https://techstore.com/book?id=store123');
        
    };

    const renderPageNumbers = () => {
        const pages = [];
        pages.push(
            <button
                key={1}
                onClick={() => setCurrentPage(1)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${currentPage === 1
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
            >
                1
            </button>
        );
        if (currentPage > 3) {
            pages.push(
                <span key="dots1" className="px-2 text-slate-600">
                    ...
                </span>
            );
        }
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${currentPage === i
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                        }`}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < totalPages - 2) {
            pages.push(
                <span key="dots2" className="px-2 text-slate-600">
                    ...
                </span>
            );
        }

        pages.push(
            <button
                key={totalPages}
                onClick={() => setCurrentPage(totalPages)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${currentPage === totalPages
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                    }`}
            >
                {totalPages}
            </button>
        );

        return pages;
    };

    return (
        <div className="min-h-screen  p-2 md:p-3 lg:p-4">
            <div className="max-w-7xl mx-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-[#111B3C] rounded-2xl p-4 border border-[#2B7FFF33] hover:border-slate-600/50 transition-all duration-300 shadow-xl">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    <p className="text-slate-400 text-sm font-medium">Total Booked</p>
                                </div>
                                <h3 className="text-[24px] font-bold text-[#FFFFFF]">34</h3>
                                <p className="text-emerald-400 text-xs font-medium">+8 this week</p>
                            </div>
                            
                        </div>
                    </div>

                    
                    <div className="bg-[#111B3C] rounded-2xl p-4 border border-[#2B7FFF33] hover:border-slate-600/50 transition-all duration-300 shadow-xl">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                                    <p className="text-slate-400 text-sm font-medium">AI Booked</p>
                                </div>
                                <h3 className="text-[24px] font-bold text-[#FFFFFF]">28</h3>
                                <p className="text-slate-400 text-xs font-medium">82% of total</p>
                            </div>
                           
                        </div>
                    </div>

                    
                    <div className="bg-[#111B3C] rounded-2xl p-4 border border-[#2B7FFF33] hover:border-slate-600/50 transition-all duration-300 shadow-xl sm:col-span-2 lg:col-span-1">
                        <div className="flex items-start justify-between">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <MdErrorOutline className="w-4 h-4 text-amber-400" />
                                    <p className="text-slate-400 text-sm font-medium">Pending</p>
                                </div>
                                <h3 className="text-[24px] font-bold text-[#FFFFFF]">3</h3>
                                <p className="text-slate-400 text-xs font-medium">Awaiting confirmation</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-b from-[#1A1A2E] to-[#16213E] rounded-2xl p-5 border border-[#2B7FFF33] shadow-xl">
                    <h3 className="text-white text-[16px] font-semibold mb-4">Booking Link</h3>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 bg-[#0A0A0F80] border border-[#00FF8833] rounded-xl px-4 py-3 flex items-center justify-between group hover:border-slate-600/50 transition-all">
                            <span className="text-slate-300 text-sm font-mono truncate mr-2">
                                https://techstore.com/book?id=store123
                            </span>
                            
                        </div>
                        <button
                            onClick={handleCopyLink}
                            className="bg-[#111B3C] shadow-[inset_0_0_10px_#D2EAFF] text-white px-6 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                        >
                            <Copy className="w-4 h-4" />
                            Copy Link
                        </button>
                    </div>
                </div>

                <div className=" bg-[#111B3C] rounded-2xl border border-slate-700/50 shadow-xl overflow-hidden">
                    
                    <div className="hidden lg:grid lg:grid-cols-8 gap-4 px-6 py-4 bg-[#0d1b2a]/50 border-b border-slate-700/50">
                        <div className="text-[#FFFFFF] text-[14px] ">Client Name</div>
                        <div className="text-[#FFFFFF] text-[14px] ">Client Phone</div>
                        <div className="text-[#FFFFFF] text-[14px] ">Client mail</div>
                        <div className="text-[#FFFFFF] text-[14px] ">Device</div>
                        <div className="text-[#FFFFFF] text-[14px] ">Repair Type</div>
                        <div className="text-[#FFFFFF] text-[14px] ">Date</div>
                        <div className="text-[#FFFFFF] text-[14px] ">Slot no</div>
                        <div className="text-[#FFFFFF] text-[14px] ">Start Time</div>
                    </div>

                    
                    <div className="divide-y divide-slate-700/30">
                        {bookings.map((booking) => (
                            <div
                                key={booking.id}
                                className="lg:grid lg:grid-cols-8 gap-4 px-6 py-4 hover:bg-[#0d1b2a]/30 transition-all duration-200 group"
                            >
                                
                                <div className="lg:hidden space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <ExternalLink className="w-3 h-43 text-blue-400" />
                                            <span className="text-[12px] text-[#51A2FF]">{booking.clientName}</span>
                                        </div>
                                        <span className="text-[#CFCFCF] text-sm">{booking.startTime}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <span className="text-[#CFCFCF] text-xs">Phone:</span>
                                            <p className="text-slate-300">{booking.clientPhone}</p>
                                        </div>
                                        <div>
                                            <span className="text-[#CFCFCF] text-xs">Date:</span>
                                            <p className="text-slate-300">{booking.date}</p>
                                        </div>
                                        <div>
                                            <span className="text-[#CFCFCF] text-xs">Device:</span>
                                            <p className="text-slate-300">{booking.device}</p>
                                        </div>
                                        <div>
                                            <span className="text-slate-500 text-xs">Type:</span>
                                            <p className="text-slate-300">{booking.repairType}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden lg:flex items-center">
                                    <div className="flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="text-[#51A2FF] text-[12px] font-medium">{booking.clientName}</span>
                                    </div>
                                </div>
                                <div className="hidden lg:flex items-center text-[#CFCFCF] text-[12px]">{booking.clientPhone}</div>
                                <div className="hidden lg:flex items-center text-[#CFCFCF] text-[12px]">{booking.clientEmail}</div>
                                <div className="hidden lg:flex items-center text-[#CFCFCF] text-[12px]">{booking.device}</div>
                                <div className="hidden lg:flex items-center text-[#CFCFCF] text-[12px]">{booking.repairType}</div>
                                <div className="hidden lg:flex items-center text-[#CFCFCF] text-[12px]">{booking.date}</div>
                                <div className="hidden lg:flex items-center text-[#CFCFCF] text-[12px]">{booking.slotNo}</div>
                                <div className="hidden lg:flex items-center text-[#CFCFCF] text-[12px]">{booking.startTime}</div>
                            </div>
                        ))}
                    </div>

                    <div className="px-6 py-4 bg-[#0d1b2a]/30 border-t border-slate-700/50">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="text-slate-400 hover:text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-700/30"
                            >
                                ← Previous
                            </button>

                            <div className="flex items-center gap-1 flex-wrap justify-center">
                                {renderPageNumbers()}
                            </div>

                            <button
                                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="text-blue-400 hover:text-blue-300 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors px-4 py-2 rounded-lg hover:bg-slate-700/30"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
