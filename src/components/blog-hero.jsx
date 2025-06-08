import React from "react";
import blogImage from "../assets/blogs.jpg";

const BlogHero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-black/60">
                <img src={blogImage} alt="Gold Bars" className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel text-white leading-tight">
                        BLOGS
                    </h1>
                    <p className="text-lg text-gray-300 mt-6 font-cinzel">
                        From market updates to long-term wealth planning, our blog delivers trusted insights into the
                        world of gold <br /> investment — helping you stay ahead in an ever-changing financial landscape.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
