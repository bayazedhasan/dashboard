import React, { useState } from 'react';
import { Phone, Clock, MapPin, FileText, Play, Search } from 'lucide-react';
import { RiArrowDropDownFill } from 'react-icons/ri';
import CallDetails from './CallDetails';

const CallList = () => {
const [selectedCall, setSelectedCall] = useState(0);
    const callData = [
        {
            id: 1,
            phone: '+1 (555) 345-0789',
            date: '2025-12-10',
            img: 'Container (1).png',
            time: '4:32:12 AM',
            duration: '3:23',
            issueType: 'Screen',
            status: 'AI Resolved',
            statusColor: 'success',
            quote: 'Quote Provided',
            escalated: true,
            appointmentBooked: false,
            callDropped: false,
            outcome: 'Quote provided',
            transcript: [
                { role: 'AI Assistant', text: 'Thank you for calling VersaFix! How can I help you today?' },
                { role: 'Customer', text: 'Hi my iPhone 13 screen is cracked. How much would it cost to repair?' },
                { role: 'AI Assistant', text: 'I can help you with that! For an iPhone 13 screen repair, our price is £159. The includes labor, and comes with a 90-day warranty. Would you like to book an appointment?' },
                { role: 'Customer', text: 'Yes, please! When are you available?' },
                { role: 'AI Assistant', text: 'Great! I can schedule you in today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?' }
            ]
        },
        {
            id: 2,
            phone: '+1 (555) 345-0789',
            date: '2025-12-10',
            img: 'Container (1).png',
            time: '4:32:12 AM',
            duration: '2:15',
            issueType: 'Software',
            status: 'Warm Transfer',
            statusColor: 'wrong',
            quote: 'Escalated to technician',
            escalated: true,
            appointmentBooked: false,
            callDropped: false,
            outcome: 'Escalated to technician',
            transcript: [
                { role: 'AI Assistant', text: 'Thank you for calling VersaFix! How can I help you today?' },
                { role: 'Customer', text: 'My phone keeps restarting randomly.' }
            ]
        },
        {
            id: 3,
            phone: '+1 (555) 345-0789',
            date: '2025-12-10',
            img: 'Container (1).png',
            time: '4:32:12 AM',
            duration: '4:45',
            issueType: 'Software',
            status: 'Appointment',
            statusColor: 'Appointment',
            quote: 'Appointment Booked',
            escalated: false,
            appointmentBooked: true,
            callDropped: false,
            outcome: 'Appointment Booked',
            transcript: [
                { role: 'AI Assistant', text: 'Thank you for calling VersaFix! How can I help you today?' },
                { role: 'Customer', text: 'I need to schedule a repair appointment.' }
            ]
        },
        {
            id: 4,
            phone: '+1 (555) 345-0789',
            date: '2025-12-10',
            img: 'Container (1).png',
            time: '4:32:12 AM',
            duration: '1:30',
            issueType: 'Unknown',
            status: 'Dropped',
            statusColor: 'failed',
            quote: 'Call Dropped',
            escalated: false,
            appointmentBooked: false,
            callDropped: true,
            outcome: 'Call Dropped',
            transcript: [
                { role: 'AI Assistant', text: 'Thank you for calling VersaFix! How can I help you today?' }
            ]
        },
        {
            id: 5,
            phone: '+1 (555) 345-0789',
            date: '2025-12-10',
            img: 'Container (1).png',
            time: '4:32:12 AM',
            duration: '5:12',
            issueType: 'Screen',
            status: 'AI Resolved',
            statusColor: 'success',
            quote: 'Quote Provided',
            escalated: false,
            appointmentBooked: false,
            callDropped: false,
            outcome: 'Quote Provided',
            transcript: [
                { role: 'AI Assistant', text: 'Thank you for calling VersaFix! How can I help you today?' },
                { role: 'Customer', text: 'I need a screen replacement quote.' }
            ]
        }
    ];

    const currentCall = callData[selectedCall];

    const statusStyles = {
        success: "border border-[#00C9504D] bg-[#00BC7D33] text-[#00C950]",
        wrong: "border border-[#FF69004D] bg-[#FB2C3633] text-[#FF6900]",
        Appointment: "border border-[#2B7FFF4D] bg-[#00B8DB33] text-[#2B7FFF99]",
        failed: "border border-[#FF15004D] bg-[#FB2C3633] text-[#FF1500]"
    };




    return (
        <div>
            <div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-slate-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by phone number, issue type..."
                            className="bg-[#0F172B80] border border-slate-700/50 text-slate-200 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 placeholder-slate-500 outline-none transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-between gap-2 px-4 py-2 bg-[#0F172B80] border border-transparent hover:bg-[#2d3a52] rounded-lg text-sm font-medium text-slate-300 transition-colors">
                            All Type
                            <RiArrowDropDownFill size={18} />
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-between gap-2 px-4 py-2 bg-[#0F172B80] border border-transparent hover:bg-[#2d3a52] rounded-lg text-sm font-medium text-slate-300 transition-colors">
                            All Issues
                            <RiArrowDropDownFill size={18} />
                        </button>
                        <button className="flex-1 md:flex-none flex items-center justify-between gap-2 px-4 py-2 bg-[#0F172B80] border border-transparent hover:bg-[#2d3a52] rounded-lg text-sm font-medium text-slate-300 transition-colors">
                            Today
                            <RiArrowDropDownFill size={18} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='p-4'>
                <div className='grid grid-cols-12 gap-4 '>
                    <div className=' col-span-5 h-135 border bg-[#111B3C]  rounded-lg border-[#2B7FFF33]'>
                        <div>
                            <h1 className='text-[20px] text-[#FFFFFF] font-medium p-3'>Call List</h1>
                            <div className='border-b border-[#2B7FFF33]'></div>
                        </div>
                        <div>
                            {
                                callData.map((data, index) => {
                                    return (
                                        <div key={index} onClick={() => setSelectedCall(index)} className='p-3 border-b last:border-b-0 active:border-b-2 active:border-[#2B7FFF] border-[#2B7FFF33] cursor-pointer '>
                                            <div className='flex justify-between'>
                                                <div className='flex items-center gap-2'>
                                                    <div>
                                                        <img className='w-8 h-8' src={data.img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h1 className='text-[16px] text-[#FFFFFF]'>{data.phone}</h1>
                                                        <p className='text-[12px] text-[#90A1B9]'>{data.date}  • {data.time}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span
                                                        className={`px-2 py-0.5 rounded-lg text-[10px] font-bold shadow-sm
                                                            ${statusStyles[data.statusColor] || "border border-gray-500 bg-gray-500/10 text-gray-400"}`}
                                                    >
                                                        {data.status}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-2 pt-3'>
                                                <div className='flex items-center gap-1 '>
                                                    <Clock className='text-[#90A1B9]' size={16} />
                                                    <p className='text-[#90A1B9] text-[12px]'>{data.duration}</p>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <FileText className='text-[#90A1B9]' size={16} />
                                                    <p className='text-[#90A1B9] text-[12px]'>{data.quote}</p>
                                                </div>
                                                <div className='border border-none px-2 text-center rounded-sm bg-[#00B8DB33] '>
                                                    <p className='text-[#51A2FF] text-[12px]'>{data.issueType}</p>
                                                </div>
                                            </div>

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='col-span-7 border bg-[#111B3C]  rounded-lg border-[#2B7FFF33]'>
                        <CallDetails currentCall={currentCall} statusStyles={statusStyles}></CallDetails>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallList;