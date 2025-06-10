import React, { useState, useEffect } from 'react';
import {
    BarChart3,
    LineChart,
    Banknote,
    Landmark,
} from 'lucide-react';

const prices = {
    '24K': 401.25,
    '22K': 371.50,
    '21K': 356.25,
    '18K': 306.25,
};
import clsx from 'clsx';

const TrustSection = () => {
    const [weight, setWeight] = useState(10);
    const [karat, setKarat] = useState('24K');
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const total = weight * prices[karat];
        setTotalValue(total.toFixed(2));
    }, [weight, karat]);

    return (
        <section className="py-16 lg:py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
                    <div className="bg-[#272727] rounded-2xl p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                            <h3 className="text-xl font-semibold text-[#DFB94A]">Live Gold Price - Dubai</h3>
                            <select className="select-dropdown">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 px-3 bg-[#323232] rounded-md">
                                <span className="text-[#DFB94A] font-bold">Gold Type</span>
                                <span className="text-[#DFB94A] font-bold">Price (AED)</span>
                            </div>

                            {Object.entries(prices).map(([key, value], index) => (
                                <div
                                    key={key}
                                    className={`flex justify-between items-center py-3 px-3 ${
                                        index < Object.entries(prices).length - 1 ? 'border-b border-[#B3B3B3]' : ''
                                    }`}
                                >
                                    <span>{key}</span>
                                    <span>{`AED ${value}`}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gold Calculator */}
                    <div className="bg-[#272727] rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-[#DFB94A] mb-6">Gold Calculator</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2">Weight (grams)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                                    className="input-field"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2">Karat</label>
                                <select
                                    value={karat}
                                    onChange={(e) => setKarat(e.target.value)}
                                    className="select-dropdown1"
                                >
                                    {Object.keys(prices).map((k) => (
                                        <option key={k}>{k}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-4">
                                <div className="text-lg text-gray-300 mb-2">Total Value:</div>
                                <div className="text-2xl font-bold text-[#DFB94A]">{`AED ${totalValue}`}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Invest Section */}
                {/* Why Invest Section */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-16">
                        Why Invest in Gold Bars
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                title: 'Hedge Against Inflation',
                                icon: <BarChart3 className="icon" />,
                                desc: 'Gold has historically maintained its value over time, making it a reliable hedge against inflation.',
                                className: '',
                            },
                            {
                                title: 'Diversify Your Portfolio',
                                icon: <LineChart className="icon" />,
                                desc: 'Adding gold to your investment portfolio can provide stability and reduce risk.',
                                className: '',
                            },
                            {
                                title: 'Tangible Asset',
                                icon: <Landmark className="icon" />,
                                desc: 'Unlike stocks and bonds, gold is a physical asset that you can hold and store.',
                                className: '',
                            },
                            {
                                title: 'High Liquidity',
                                icon: <Banknote className="icon" />,
                                desc: 'Gold bars are highly liquid, meaning they can be easily bought and sold in the market.',
                                className: 'lg:col-start-2 lg:row-start-2',
                            },
                        ].map(({ title, icon, desc, className }) => (
                            <div
                                key={title}
                                className={clsx('benefit-card group', className)}
                            >
                                <div className="benefit-icon group-hover:scale-110 transition-transform">
                                    {icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3">{title}</h3>
                                <p className="text-gray-400 text-sm sm:text-base">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TrustSection;
