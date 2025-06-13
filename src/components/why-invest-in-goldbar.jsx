import React from 'react';
import { Check, Star, ChevronRight, ChevronLeft } from 'lucide-react';

import goldBar1 from '../assets/gold-bars-1.jpg';
import goldBar2 from '../assets/gold-bars-2.jpg';
import goldBar3 from '../assets/gold-bars-3.jpg';


const WhyInvestInGoldBars = () => {
    const goldBars = [
        {
            id: 1,
            title: "Gold Bar 1 Gram",
            image: goldBar1,
            weight: "1 Gram",
            inStock: true
        },
        {
            id: 2,
            title: "Gold Bar 10 Gram",
            image: goldBar2,
            weight: "10 Gram",
            inStock: true
        },
        {
            id: 3,
            title: "Gold Bar 10 Tolas",
            image: goldBar3,
            weight: "10 Gram",
            inStock: true
        },
        {
            id: 4,
            title: "Gold Bar 1 Gram",
            image: goldBar1,
            weight: "1 Gram",
            inStock: true
        },
        {
            id: 5,
            title: "Gold Bar 10 Gram",
            image: goldBar2,
            weight: "10 Gram",
            inStock: true
        },
        {
            id: 6,
            title: "Gold Bar 10 Tolas",
            image: goldBar3,
            weight: "10 Gram",
            inStock: true
        },
        {
            id: 7,
            title: "Gold Bar 1 Gram",
            image: goldBar1,
            weight: "1 Gram",
            inStock: true
        },
        {
            id: 8,
            title: "Gold Bar 10 Gram",
            image: goldBar2,
            weight: "10 Gram",
            inStock: true
        },
        {
            id: 9,
            title: "Gold Bar 10 Tolas",
            image: goldBar3,
            weight: "10 Gram",
            inStock: true
        }
    ];

    const StarRating = () => (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
                <Star key={index} className="w-5 h-5 star-icon" fill="currentColor" />
            ))}
        </div>
    );

    const GoldBarCard = ({ goldBar }) => (
        <div className="bg-[#272727] rounded-2xl p-6 card-height flex flex-col border-2 border-transparent transition-all duration-200 ease-out hover:border-[#DFB94A]">
            <div className="image-container rounded-xl mb-6 bg-gray-700 flex-shrink-0">
                <div className="image-placeholder w-full h-full rounded-xl">
                    <img src={goldBar.image} alt="Gold Bar" className="w-full h-full object-cover rounded-xl" />
                </div>
            </div>

            <div className="content-section flex flex-col flex-grow">
                <h2 className="text-xl lg:text-2xl font-medium mb-3 text-white">{goldBar.title}</h2>

                <div className="flex items-center mb-4">
                    <span className="text-[#DFB94A] text-sm">In Stock</span>
                    <Check className="w-4 h-4 ml-2 text-green-500" />
                </div>

                <div className="flex items-center mb-6">
                    <StarRating />
                </div>

                <div className="space-y-3 mb-6 flex-grow border-t border-b border-[#B3B3B3] pt-4 pb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Purity</span>
                        <span className="text-white">24k</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Brand</span>
                        <span className="text-white">Save in Gold</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400">Weight</span>
                        <span className="text-white">{goldBar.weight}</span>
                    </div>
                </div>

                <div className="mb-4 flex justify-end">
                    <a
                        href="#"
                        className="text-[#DFB94A] hover:text-yellow-300 transition-colors duration-200 flex items-center"
                    >
                        Read More
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </a>
                </div>

                <div className="text-[#757575] text-center text-sm mt-auto">
                    Save in Gold Bar
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-black py-12">
            <div className="container mx-auto px-4 font-montserrat">
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-center mt-12 mb-12 text-white">
                    Why Invest in Gold Bars
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:p-10 md:p-12 small-srn">
                    {goldBars.map((goldBar) => (
                        <GoldBarCard key={goldBar.id} goldBar={goldBar} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-6 mt-10">
                    <button
                        aria-label="Previous page"
                        className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-[#DFB94A] text-[#DFB94A] bg-transparent hover:bg-gold-400 hover:text-black transition-colors duration-200">
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex items-center space-x-3 sm:space-x-6 text-xl">
                        <span className="text-[#DFB94A] font-semibold cursor-pointer">1</span>
                        <span className="text-white hover:text-[#DFB94A] cursor-pointer">2</span>
                        <span className="text-white hover:text-[#DFB94A] cursor-pointer">3</span>
                        <span className="text-white hidden sm:inline">...</span>
                        <span className="text-white hover:text-[#DFB94A] cursor-pointer">32</span>
                    </div>

                    <button
                        aria-label="Next page"
                        className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-[#DFB94A] text-[#DFB94A] bg-transparent hover:bg-gold-400 hover:text-black transition-colors duration-200">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyInvestInGoldBars;