import React from 'react';
import Cart from '../../Components/Cart';
import CallTrendsChart from '../../Components/CallTrendsChart';
import RecentActivity from '../../Components/RecentActivity';
import TopRepairRequests from '../../Components/TopRepairRequests';

const Home = () => {
    return (
        <div className='bg-[#162456]'>
            <Cart></Cart>
            <CallTrendsChart></CallTrendsChart>
            <div className='grid grid-cols-2 gap-4 items-center justify-between p-4'>
                <RecentActivity></RecentActivity>
                <TopRepairRequests></TopRepairRequests>
            </div>
        </div>
    );
};

export default Home;