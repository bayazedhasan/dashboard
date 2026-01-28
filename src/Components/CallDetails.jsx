import { FileText, Play } from 'lucide-react';
import React from 'react';

const CallDetails = ({ currentCall, statusStyles }) => {
    return (
        <div>
            <div>

                <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-y-auto custom-scrollbar">
                    <div>
                        <h1 className='text-[20px] text-[#FFFFFF] font-medium p-3'>Call Details</h1>
                        <div className='border-b border-[#2B7FFF33]'></div>
                    </div>

                    <div className=" p-6 lg:p-8 flex flex-col gap-8 shadow-sm">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 font-medium ">Phone Number</p>
                                <p className="text-[16px] text-[#FFFFFF] font-medium">{currentCall.phone}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 font-medium ">Duration</p>
                                <p className="text-[16px] text-[#FFFFFF] font-medium">{currentCall.duration}</p>
                            </div>

                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 font-medium ">Date & Time</p>
                                <p className="text-[16px] text-[#FFFFFF] font-medium">{currentCall.date} {currentCall.time}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 font-medium">Issue Type</p>
                                <p className="text-[16px] text-[#FFFFFF] font-medium">{currentCall.issueType}</p>
                            </div>

                            <div className="space-y-1 col-span-1 md:col-span-2">
                                <p className="text-xs text-slate-500 font-medium mb-2">Call Type</p>
                                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold shadow-sm
                                                            ${statusStyles[currentCall.statusColor] || "border border-gray-500 bg-gray-500/10 text-gray-400"}`}>
                                    {currentCall.status}
                                </span>
                            </div>

                            <div className="col-span-1 md:col-span-2 space-y-2">
                                <p className="text-xs text-slate-500 font-medium ">Outcome</p>
                                <div className=" text-sm">
                                    {currentCall.outcome}
                                </div>
                            </div>
                        </div>


                        <button className="w-full bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] text-[#C27AFF] py-2 rounded-lg text-sm cursor-pointer flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-900/20 active:scale-[0.99] group">
                            <div className="w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/50 transition-colors">
                                <Play size={10} className="ml-0.5" />
                            </div>
                            Play Audio Recording
                        </button>


                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex items-center gap-2 text-[#FFFFFF] font-semibold">
                                <FileText size={18} className="text-blue-400" />
                                <span>Conversation Transcript</span>
                            </div>

                            <div className="bg-[#1D293D80] rounded-xl p-6 space-y-6 max-h-[400px] overflow-y-auto custom-scrollbar border border-slate-800">
                                {currentCall.transcript.map((message, index) => (
                                    <div key={index} className="flex flex-col gap-1.5">
                                        <span className={`text-xs font-bold  ${message.role === 'AI Assistant' ? 'text-emerald-400' : 'text-blue-400'
                                            }`}>
                                            {message.role}:
                                        </span>
                                        <p className="text-sm text-slate-300 leading-relaxed pl-0">
                                            {message.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallDetails;