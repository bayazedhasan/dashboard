import React from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CallTrendsChart = () => {
    const data = [
        { day: 'Mon', calls: 28 },
        { day: 'Tue', calls: 35 },
        { day: 'Wed', calls: 31 },
        { day: 'Thu', calls: 45 },
        { day: 'Fri', calls: 55 },
        { day: 'Sat', calls: 45 },
        { day: 'Sun', calls: 23 },
    ];

    return (
        <div className='p-4'>
            <div className="bg-[#111B3C] rounded-lg p-6 border border-[#2B7FFF33]">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-[20px] font-semibold text-[#FFFFFF]">Call Trends - This Week</h3>
                    <p className='text-[14px] text-[#90A1B9]'>Total: 472 calls</p>
                </div>
                <div className='flex border px-1 cursor-pointer hover:scale-105 duration-300  py-0.5 border-none bg-[#1D293D] rounded-lg items-center gap-1'>
                    <span className="  text-[16px] p-1 text-[#FFFFFF] ">This Week</span>
                    <RiArrowDropDownFill size={18}/>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2A2F3E" />
                    <XAxis
                        dataKey="day"
                        stroke="#8B92A8"
                        tick={{ fill: '#8B92A8' }}
                    />
                    <YAxis
                        stroke="#8B92A8"
                        tick={{ fill: '#8B92A8' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1A1F2E',
                            border: '1px solid #2A2F3E',
                            borderRadius: '8px',
                            color: '#FFFFFF'
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="calls"
                        stroke="#00B0FF"
                        fillOpacity={1}
                        fill="url(#colorCalls)"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        </div>
        
    );
};

export default CallTrendsChart;
