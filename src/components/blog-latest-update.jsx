import React from "react";
import { ChevronRight } from "lucide-react";
import blogImage from "../assets/blog-img.png";


const BlogCard = () => (
    <article className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)] flex flex-col h-full">
        <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
                <img
                    src={blogImage}
                    alt="Gold bars with mobile phones showing trading app"
                    className="w-full h-[300px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Left gradient border */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-t from-[#DFB94A] via-[#DFB94A] to-transparent"></div>

                {/* Right gradient border */}
                <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-gradient-to-t from-[#DFB94A] via-[#DFB94A] to-transparent"></div>

                {/* Bottom gradient border */}
                <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-[#DFB94A] via-[#DFB94A] to-[#DFB94A]"></div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    {/* Apply responsive padding here */}
                    <button className="bg-[#DFB94A] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm font-medium whitespace-nowrap">Save in Gold News</button>
                </div>
            </div>
        </div>

        <div className="flex flex-col p-6 space-y-4 flex-1">
            <h3 className="text-white font-medium text-lg leading-tight hover:text-[#DFB94A] transition-colors cursor-pointer">
                Exploring Online Gold Trading Platforms in Dubai: Safe and Secure Ways to...
            </h3>
            <p className="text-white text-sm leading-relaxed line-clamp-2">
                Did you know that the gold trade value of Dubai is likely to exceed the mark of USD 100 billion by 2030?
                This represents a significant opportunity for investors.
            </p>

            <div className="pt-2 flex justify-between items-center">
                <a href="#" className="text-[#DFB94A] text-sm font-medium hover:text-yellow-300 flex items-center gap-1">
                    Read More <ChevronRight className="w-4 h-4" />
                </a>
                <span className="text-gray-400 text-xs">18-04-2025</span>
            </div>

            <div className="text-center pt-4 border-t border-gray-600 mt-auto">
                <span className="text-gray-400 text-xs">Posted By Admin</span>
            </div>
        </div>
    </article>
);

const BlogLatestUpdate = () => {
    return (
        <section className="py-16 lg:py-20 bg-black font-montserrat">
            <div className="max-w-7xl mx-auto px-4 blog-card-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">Latest Updates</h2>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
        </section>
    );
};

export default BlogLatestUpdate;