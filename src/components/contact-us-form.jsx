import React from 'react';

const ContactUsForm = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black" aria-labelledby="contact-heading">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#272727] rounded-3xl p-8 lg:p-12 shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-[#DFB84A] mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Our advisors are available to guide your investment journey in physical and digital gold assets.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-center space-x-4">
                                    <div className="text-[#DFB84A]">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <a href="tel:+971501234567" className="text-gray-300 hover:text-[#DFB84A] transition-colors">
                                        +971 50 123 4567
                                    </a>
                                </div>

                                {/* Email */}
                                <div className="flex items-center space-x-4">
                                    <div className="text-[#DFB84A]">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:support@saveingold.com" className="text-gray-300 hover:text-[#DFB84A] transition-colors">
                                        support@saveingold.com
                                    </a>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-4">
                                    <div className="text-[#DFB84A]">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-300">Dubai, UAE</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Abra Kadabra (Just kidding)"
                                    required
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="abc@example.com"
                                    required
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+971 50 123 4567"
                                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
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
                                    className="w-full bg-[#DFB84A] text-black font-semibold py-4 px-6 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
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
