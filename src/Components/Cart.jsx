import React from 'react';

const Cart = () => {
    const cartData = [
        { name: 'Total Calls Today', value: 127, percent: '+12%', icon: 'Container (1).png' },
        { name: 'AI-Handled Calls', value: 98, percent: '+77%', icon: 'Container (2).png' },
        { name: 'Warm Transfer', value: 23, percent: '+18%', icon: 'Container (3).png' },
        { name: 'Appointments Booked', value: 34, percent: '+8%', icon: 'Container (4).png' },
        { name: 'Missed/Failed Calls', value: 6, percent: '-3%', icon: 'Container (5).png' },
        { name: 'Avg Call Duration', value: '3:42', percent: '+12%', icon: 'Container (6).png' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {cartData.map((data, index) => {
                const isPositive = data.percent.startsWith('+');

                return (
                    <div
                        key={index}
                        className=" rounded-xl p-4 border bg-[#111B3C] border-[#2B7FFF33] hover:border-gray-800 transition-all"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <p className="text-[14px] text-[#90A1B9] mb-1">{data.name}</p>
                                <h3 className="text-[30px] font-bold text-[#FFFFFF]">{data.value}</h3>
                            </div>

                            <div className="p-1 rounded-lg">
                                <img className='w-10 h-10' src={data.icon} alt={data.name} />
                            </div>
                        </div>

                        <span
                            className={`text-sm font-medium ${
                                isPositive ? 'text-[#05DF72]' : 'text-red-400'
                            }`}
                        >
                             {data.percent}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
