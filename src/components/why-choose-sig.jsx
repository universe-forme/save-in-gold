import React from "react";

const  WhyChooseSig = () => {
    return (
        <section className="py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Save In Gold?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="bg-[#272727] rounded-xl p-6 text-center hover:border-yellow-400 border border-transparent transition-all duration-300 flex items-center justify-center h-full min-h-[200px]">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            1. Trade real bars and coins, invest in gold. Our platform ensures that every transaction is
                            backed
                            by physical gold, providing you with a secure gold trading investment.
                        </p>
                    </div>

                    <div
                        className="bg-[#272727] rounded-xl p-6 text-center hover:border-yellow-400 border border-transparent transition-all duration-300 flex items-center justify-center h-full min-h-[200px]">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            2. Our intuitive interface makes gold trading market effortlessly. Whether you're a seasoned
                            investor or new to gold trading, Save In Gold offers a user experience that's
                            straightforward.
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <div
                        className="bg-[#272727] rounded-xl p-6 text-center hover:border-yellow-400 border border-transparent transition-all duration-300 flex items-center justify-center h-full min-h-[200px] max-w-md w-full">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            3. A dedicated account manager will be by your side 24/7, offering personalized support and
                            expert
                            guidance at every stage of your gold investment journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSig;