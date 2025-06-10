import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
} from "lucide-react";
import logo from "../assets/logo.png";
import React from "react";


const FooterSection = () => {
    return (
        <footer className="bg-[#272727] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-30">
                                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                            </div>
                            {/*<div>*/}
                            {/*    <div className="text-yellow-400 font-bold text-lg">SAVE</div>*/}
                            {/*    <div className="text-yellow-400 font-bold text-sm">Gold</div>*/}
                            {/*</div>*/}
                        </div>
                        <p className="text-gray-300 text-sm">Save in Gold<br />Company</p>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 list-disc list-inside">
                            {["Shop", "About Us", "Contact Us", "Blog", "Save in Gold News", "Save in Gold Application"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-[#DFB94A] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold text-lg mb-4">GOLD INVESTMENT</h3>
                        <ul className="space-y-2 list-disc list-inside">
                            {["Trade Application", "Gold Trade Location", "Why invest In Gold", "Open Demo Account", "Open Real Account"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-[#DFB94A] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold text-lg mb-4">PRIVACY AND TERMS</h3>
                        <ul className="space-y-2 list-disc list-inside">
                            {["Privacy Policy", "Refund Returns", "Terms & Conditions", "Shipping & Delivery Policy", "Latest News", "Our Sitemap", "Menu child item"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-300 hover:text-[#DFB94A] transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold text-lg mb-4">AVAILABLE ON:</h3>
                        <div className="space-y-3 store-links">
                            <a
                                href="#"
                                className="flex items-center bg-[#43484C] hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200"
                            >
                                <span className="text-white text-2xl mr-3"></span>
                                <div>
                                    <div className="text-xs text-gray-400">Download now</div>
                                    <div className="text-white font-semibold">App Store</div>
                                </div>
                            </a>

                            <a
                                href="#"
                                className="flex items-center bg-[#43484C] hover:bg-gray-700 rounded-lg p-3 transition-colors duration-200"
                            >
                                <span className="text-white text-2xl mr-3">▶</span>
                                <div>
                                    <div className="text-xs text-gray-400">Download now</div>
                                    <div className="text-white font-semibold">Play Store</div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-6">
                            <div className="flex space-x-3">
                                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-10 h-10 bg-[#43484c] hover:bg-opacity-80 rounded-lg flex items-center justify-center transition-colors duration-200"
                                    >
                                        <Icon className="text-white w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                    <p className="text-gray-400 text-sm">© Copyright 2025 Save in Gold Company</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
