import React from 'react';

const RecentActivity = () => {
    const activities = [
        {
            id: 1,
            text: "AI booked appointment for iPhone 13 screen repair",
            status: "success",
            time: "2 min ago"
        },
        {
            id: 2,
            text: "Warm transfer to technician - Software issue",
            status: "warning",
            time: "5 min ago"
        },
        {
            id: 3,
            text: "Quote provided for iPad battery replacement",
            status: "success",
            time: "8 min ago"
        },
        {
            id: 4,
            text: "Call dropped after 12 seconds",
            status: "warning",
            time: "15 min ago"
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'success':
                return '#00E676';
            case 'warning':
                return '#FF6D00';
            case 'info':
                return '#00B0FF';
            case 'error':
                return '#F50057';
            default:
                return '#8B92A8';
        }
    };

    return (
        <div>
            <div className="bg-[#111B3C] rounded-lg p-6 border border-[#2B7FFF33]">
                <h3 className="text-[20px] font-semibold text-[#FFFFFF] mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex border rounded-lg p-2 bg-[#1D293D80] border-none items-start gap-3">
                            <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: getStatusColor(activity.status) }}
                            />
                            <div>
                                <p className="text-[14px] text-[#FFFFFF] leading-relaxed">{activity.text}</p>
                                <p className='text-[12px] text-[#7A8BA4]'>{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivity;
