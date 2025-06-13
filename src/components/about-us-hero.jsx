import React from "react";
import aboutUsImage from "../assets/about-us.jpg";

const AboutUsHero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-black/60">
                <img
                    src={aboutUsImage}
                    alt="Gold Bars"
                    className="w-full h-full object-cover opacity-30"
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                <div className="items-center">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-cinzel leading-tight text-white">
                            ABOUT SAVE IN GOLD
                        </h1>
                        <p className="text-lg text-white mx-auto mt-6 font-montserrat font-normal">
                            Welcome to Save in Gold — your trusted platform for real gold trading in the UAE. We offer a
                            secure, transparent,<br /> and easy way to buy, sell, and store high-quality gold bars, making us
                            a leading choice for investors <br /> across Dubai and beyond.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsHero;
