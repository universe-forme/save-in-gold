import React from 'react';
import {CornerDownRight} from "lucide-react";

const ContactUsForm = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black font-montserrat" aria-labelledby="contact-heading">
            <div className="max-w-6xl mx-auto contact-padding">
                <div className="bg-[#272727] rounded-3xl p-8 lg:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 id="contact-heading" className="text-3xl sm:text-4xl font-semibold text-[#DFB84A] text-center mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-[#cccccc] text-lg leading-relaxed">
                                    Our advisors are available to guide your investment journey in physical and digital gold assets.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-center space-x-4">
                                    <div className="text-[#DFB84A]">
                                        <CornerDownRight className="w-6 h-6" />
                                    </div>
                                    <a href="tel:+971501234567" className="text-white hover:text-[#DFB84A] transition-colors">
                                        +971 50 123 4567
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <div className="text-[#DFB84A]">
                                        <CornerDownRight className="w-6 h-6" />
                                    </div>
                                    <a href="mailto:support@saveingold.com" className="text-white hover:text-[#DFB84A] transition-colors">
                                        support@saveingold.com
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-4">
                                    <div className="text-[#DFB84A]">
                                        <CornerDownRight className="w-6 h-6" />
                                    </div>
                                    <span className="text-white">Dubai, UAE</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Abra Kadabra (Just kidding)"
                                    required
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-[#757575] focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="abc@example.com"
                                    required
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-[#757575] focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+971 50 123 4567"
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-[#757575] focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell us more about your goals..."
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-[#DFB84A] text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsForm;
