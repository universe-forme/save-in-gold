// src/components/RecentUpdates.jsx
import React from "react";
import blogImg from "@/assets/abc.png";
import { ArrowRight, ArrowLeft } from "lucide-react";

const BlogCard = () => (
    <article className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)] flex flex-col h-full">
        <div className="relative">
            <img src={blogImg} alt="Blog" className="w-full h-[300px] object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <button className="bg-yellow-400 text-white px-4 py-2 rounded-md text-sm font-medium">Save in Gold News</button>
            </div>
        </div>

        <div className="flex flex-col p-6 space-y-4 flex-1">
            <h3 className="text-white font-semibold text-lg leading-tight hover:text-yellow-400 transition-colors cursor-pointer">
                Exploring Online Gold Trading Platforms in Dubai: Safe and Secure Ways to...
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                Did you know that the gold trade value of Dubai is likely to exceed the mark of USD 100 billion by 2030?
                This represents a significant opportunity for investors.
            </p>

            <div className="pt-2 flex justify-between items-center">
                <a href="#" className="text-yellow-400 text-sm font-medium hover:text-yellow-300 flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-gray-400 text-xs">18-04-2025</span>
            </div>

            <div className="text-center pt-4 border-t border-gray-600 mt-auto">
                <span className="text-gray-400 text-xs">Posted By Admin</span>
            </div>
        </div>
    </article>
);

const RecentUpdates = () => {
    return (
        <section className="py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Recent Updates</h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>

                <div className="flex justify-center items-center space-x-6 mt-12">
                    <button className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-200">
                        <ArrowLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center space-x-6 text-xl">
                        <span className="text-yellow-400 font-semibold">1</span>
                        <span className="text-gray-200">2</span>
                        <span className="text-gray-200">3</span>
                        <span className="text-gray-400">...</span>
                        <span className="text-gray-200">32</span>
                    </div>

                    <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400 text-white hover:bg-yellow-500 transition-colors duration-200">
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecentUpdates;
