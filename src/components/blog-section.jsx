import { ArrowRight } from "lucide-react";
import blogImage from "../assets/abc.png";

const BlogSection = () => {
    return (
        <section className="py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Save In Gold Feature
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, idx) => (
                        <article
                            key={idx}
                            className="rounded-xl overflow-hidden flex flex-col bg-[#1c1c1c]"
                        >
                            <div className="relative">
                                <img
                                    src={blogImage}
                                    alt="Gold Trading Blog Image"
                                    className="w-full h-60 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                    <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">
                                        Save in Gold News
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex flex-col flex-grow">
                                <h3 className="text-white font-semibold text-lg leading-tight hover:text-yellow-400 transition-colors cursor-pointer">
                                    Exploring Online Gold Trading Platforms in Dubai: Safe and Secure Ways to...
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed truncate">
                                    Did you know that the gold trade value of Dubai is likely to exceed the
                                    mark of USD 100 billion by the year 2030? This represents a significant
                                    opportunity for investors.
                                </p>
                                <div className="pt-2">
                                    <a
                                        href="#"
                                        className="text-yellow-400 text-sm font-medium hover:text-yellow-300 transition-colors flex items-center"
                                    >
                                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-600 mt-auto">
                                    <span className="text-gray-400 text-xs">18-04-2025</span>
                                    <span className="text-gray-400 text-xs">Posted By Admin</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
