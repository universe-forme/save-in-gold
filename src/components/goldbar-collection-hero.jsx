import React from 'react';
import goldBarHeroImage from  '../assets/goldbar-collection.jpg';

const GoldbarCollectionHero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-black/60">
                <img
                    src={goldBarHeroImage}
                    alt="Gold Bars"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>

            {/* Hero Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel leading-tight text-white">
                        EXPLORE OUR GOLD BARS <br /> COLLECTION
                    </h1>

                    <p className="text-lg text-gray-300 mt-6 font-cinzel">
                        Discover a variety of gold bars available for purchase, ranging from 1 gram to 1 kilogram. Our selection <br />
                        includes options with holograms for added security. Each gold bar is of the highest quality, ensuring your <br />
                        investment is safe and reliable. Enjoy the best rates and excellent customer service when you choose to <br />
                        invest in gold with us.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GoldbarCollectionHero;
