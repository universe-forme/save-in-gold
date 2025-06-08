import React from "react";
import ContactImages from "../assets/contact-us.jpg";

const ContactUsHero = () => {
    return (
        <section
            className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">

            <div className="absolute inset-0 bg-black/60">
                <img src={ContactImages} alt="Gold Bars" className="w-full h-full object-cover opacity-30"/>
            </div>
            <div
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                <div className="items-center">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel text-white leading-tight">
                            CONTACT US
                        </h1>

                        <p className="text-xl text-gray-300 mx-auto mt-6 font-cinzel">
                            Our team of specialists is ready to answer your questions about gold investing, account
                            setup, or <br/> secure storage.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactUsHero;