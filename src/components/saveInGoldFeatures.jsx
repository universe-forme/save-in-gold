import React from 'react';
import abcImage from "../assets/200g-goldbar.jpg";
import buildingImg from "../assets/building.jpg";
import tallBuildingImg from "../assets/tall-building.jpg";

const SaveInGoldFeatures = () => {
    return (
        <section className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto font-montserrat save-in-gold-padding">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl lg:text-4xl font-medium font-montserrat">
                        Save In Gold Features
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="space-y-6">
                        <div className="inline-block">
                          <span className="text-[#DFB84A]  text-lg font-medium">
                            Save in Gold
                          </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[54px] font-normal leading-tight font-cinzel">
                            Why Buy Gold Bars from Save in Gold Company?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="space-y-3 mt-4">
                                <h3 className="text-xl font-semibold text-[#DFB84A]">
                                    Highest Purity
                                </h3>
                                <p className="text-white text-[18px] leading-relaxed">
                                    Our 24k gold bars are 99.99% pure, providing you with the highest quality gold available on the market.
                                </p>
                            </div>

                            <div className="space-y-3 mt-4">
                                <h3 className="text-xl font-semibold text-[#DFB84A]">
                                    Certified and Hallmarked
                                </h3>
                                <p className="text-white text-[18px] leading-relaxed">
                                    Each gold bar comes with an assay certificate and is stamped with our hallmark, guaranteeing its authenticity.
                                </p>
                            </div>

                            <div className="space-y-3 mt-4">
                                <h3 className="text-xl font-semibold text-[#DFB84A]">
                                    Variety of Sizes
                                </h3>
                                <p className="text-white text-[18px] leading-relaxed">
                                    Whether you are looking to make a small investment or purchase larger quantities, we offer gold bars in various sizes ranging from 1 gram to 1 kilogram.
                                </p>
                            </div>

                            <div className="space-y-3 mt-4">
                                <h3 className="text-xl font-semibold text-[#DFB84A]">
                                    Competitive Pricing
                                </h3>
                                <p className="text-white text-[18px] leading-relaxed">
                                    Our prices are based on the current market rates, ensuring that you receive the most competitive pricing for your gold bar purchases.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={abcImage}
                                alt="Gold bars"
                                className="w-full h-64 object-cover"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 h-[40vh] max-h-[500px]">
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src={buildingImg}
                                    alt="Modern building interior"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src={tallBuildingImg}
                                    alt="Skyscrapers"
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 space-y-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#DFB84A]">
                                Real Gold Transactions
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-white text-sm font-bold">1.</span>
                                    <p className="text-white text-[18px]">
                                        Trade real gold bars and coins online with save in gold.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-white text-sm font-bold">2.</span>
                                    <p className="text-white text-[18px]">
                                        Our platform ensures that every transaction is backed by physical gold, providing you with a secure and reliable investment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#DFB84A]">
                                User-Friendly Interface
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-white text-sm font-bold">1.</span>
                                    <p className="text-white text-[18px]">
                                        Our intuitive and easy-to-use interface allows you to navigate the gold trading market effortlessly.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-white text-sm font-bold">2.</span>
                                    <p className="text-white text-[18px]">
                                        Whether you're a seasoned investor or new to gold trading, Save in Gold makes the process simple and straightforward.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#DFB84A]">
                                Flexible Trading Options
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-white text-sm font-bold">1.</span>
                                    <p className="text-white text-[18px]">
                                        Buy or sell gold in various quantities to suit your investment needs.
                                    </p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-white text-sm font-bold">2.</span>
                                    <p className="text-white text-[18px]">
                                        Our platform supports both small and large transactions, giving you the flexibility to trade as you see fit.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#DFB84A]">
                                Dedicated Account Managers
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-white text-sm font-bold">1.</span>
                                    <p className="text-white text-[18px]">
                                        A dedicated account manager just for you to assist you 24/7
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaveInGoldFeatures;