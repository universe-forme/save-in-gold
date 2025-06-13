// src/components/FaqSection.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
    {
        question: "What is 24k Gold Bar?",
        answer:
            "24k gold bars are pure gold bars containing 99.9% gold content, making them the highest purity gold available for investment.",
    },
    {
        question: "Where can I buy 24k Gold Bars from the Save in Gold Company?",
        answer:
            "You can purchase 24k gold bars directly through our website, mobile app, or by visiting our physical locations in Dubai.",
    },
    {
        question:
            "Are there different size of 24k Gold Bars available at Save in Gold company?",
        answer:
            "Yes, we offer various sizes from 1 gram to 1 kilogram to suit different investment needs and budgets.",
    },
    {
        question: "How should I store my 24k gold bars from Save in Gold Company?",
        answer:
            "We recommend storing your gold bars in a secure vault, safety deposit box, or our secure storage facilities for maximum protection.",
    },
    {
        question:
            "Is there a tax on purchasing 24k gold bars from Save in Gold Company?",
        answer:
            "Tax regulations vary by location. Please consult with our team or a tax professional for specific information regarding your jurisdiction.",
    },
    {
        question: "How can I verify the authenticity of a 24k Gold Bar?",
        answer:
            "Each gold bar comes with an assay certificate and unique serial number. You can verify authenticity through our verification system.",
    },
    {
        question:
            "How is the price of a 24k Gold Bar from Save in Gold Company determined?",
        answer:
            "Our prices are based on current market rates plus a small premium for processing, certification, and secure handling.",
    },
    {
        question:
            "What are the benefits of investing in 24k gold bars from Save in Gold Company?",
        answer:
            "Benefits include portfolio diversification, inflation hedge, high liquidity, and owning a tangible asset with intrinsic value.",
    },
    {
        question: "What should I do if I receive a damaged or wrong product?",
        answer:
            "Contact our customer service immediately. We provide full insurance coverage and will replace or refund damaged products.",
    },
    {
        question:
            "Can I sell my 24k gold bar purchased from Save in Gold Company easily?",
        answer:
            "Yes, we offer buyback services at competitive rates, and our certified gold bars are easily tradeable in the global market.",
    },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
    <div className="bg-[#272727] rounded-lg  border border-[#757575] font-normal">
        <button
            onClick={onClick}
            className="w-full h-16 px-6 text-left flex justify-between items-center text-white hover:bg-[#444444] transition-colors rounded-lg"
        >
            <span className="font-medium">{faq.question}</span>
            <ChevronDown
                className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                }`}
            />
        </button>
        {isOpen && (
            <div className="px-6 pb-4">
                <p className="text-gray-300 text-sm">{faq.answer}</p>
            </div>
        )}
    </div>
);

const ContactUsFaqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const leftColumn = faqData.slice(0, 5);
    const rightColumn = faqData.slice(5);

    return (
        <section className="py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 font-montserrat faqs-padding">
                <div className="text-start mb-12">
                    <h2 className="text-3xl sm:text-4xl text-center mb-4 text-white font-medium">
                        Frequently Asked Question
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                        {leftColumn.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                    <div className="space-y-4">
                        {rightColumn.map((faq, index) => (
                            <FAQItem
                                key={index + 5}
                                faq={faq}
                                isOpen={openIndex === index + 5}
                                onClick={() => handleToggle(index + 5)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsFaqs;
