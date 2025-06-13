import React from "react";

const NotFoundSection = () => {
    return (
        <section className="h-[100vh] bg-black flex flex-col items-center justify-center text-center px-4 font-montserrat">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-semibold text-[#DFB84A] mb-6 sm:mb-8">
                404
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-medium mb-4 sm:mb-6">
                Oops! Page Not Found
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white mb-8 sm:mb-10 max-w-md mx-auto">
                The page you are looking for doesn't exist or has been removed.
            </p>

            <a href="/"
               className="bg-[#DFB84A] hover:bg-yellow-400 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-colors duration-300 inline-block text-center"
            >
                Back To Home
            </a>
        </section>
    );
};

export default NotFoundSection;
