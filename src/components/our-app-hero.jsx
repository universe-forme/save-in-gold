import React from "react";
import ourAppImage from "../assets/our-app.jpg";

const OurAppHero = () => {
    return (
        <section
            className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">

            <div className="absolute inset-0 bg-black/60">
                <img src={ourAppImage} alt="Gold Bars" className="w-full h-full object-cover opacity-30"/>
            </div>
            <div
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                <div className="items-center">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel text-white leading-tight">
                            SAVE IN GOLD APPLICATION
                        </h1>

                        <p className="text-lg text-gray-300 mx-auto mt-6 font-cinzel">
                            We're not just a platform, we're a community. Whether you're new to precious metals or a
                            seasoned investor, <br/> Save in Gold is your trusted partner in securing a
                            brighter, <br/> more
                            stable financial future.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default OurAppHero;
