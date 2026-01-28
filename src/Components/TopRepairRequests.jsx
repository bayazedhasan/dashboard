import React from 'react';

const TopRepairRequests = () => {
    const requests = [
        { id: 1, name: 'Screen Repair', count: 126, percentage: 85, color: '#2B7FFF' },
        { id: 2, name: 'Battery Replacement', count: 98, percentage: 70, color: '#2B7FFF' },
        { id: 3, name: 'Back Glass Repair', count: 87, percentage: 60, color: '#2B7FFF' },
        { id: 4, name: 'Software Issues', count: 52, percentage: 35, color: '#2B7FFF' },
    ];

    return (
        <div className="bg-[#111B3C] h-auto lg:h-92 rounded-lg p-6 border border-[#2B7FFF33]">
            <h3 className="text-[20px] font-semibold text-[#FFFFFF] mb-4">Top Repair Requests</h3>
            <div className="space-y-4">
                {requests.map((request) => (
                    <div key={request.id}>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[14px] text-[#FFFFFF]">{request.name}</span>
                            <span className="text-[14px] text-[#C0CCDD]">{request.count} requests</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-300"
                                style={{
                                    width: `${request.percentage}%`,
                                    backgroundColor: request.color
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRepairRequests;
