import React from "react";

const NotFoundSection = () => {
    return (
        <section className="h-[80vh] bg-black flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-yellow-400 mb-6 sm:mb-8">
                404
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-4 sm:mb-6">
                Oops! Page Not Found
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 max-w-md mx-auto">
                The page you are looking for doesn't exist or has been removed.
            </p>

            <a href="/"
               className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-300 inline-block text-center"
               style={{ textDecoration: 'none' }} // Remove underline from the link
            >
                Back To Home
            </a>
        </section>
    );
};

export default NotFoundSection;
