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
        question: "What are the benefits of investing in 24k gold bars from Save in Gold Company?",
        answer: "Investing in 24k gold bars offers a stable store of value, protection against inflation, portfolio diversification, and global liquidity. Our gold bars are 99.99% pure, ensuring maximum value and authenticity.",
    },
    {
        question: "How should I store my 24k gold bars from Save in Gold Company?",
        answer: "We recommend storing your 24k gold bars in a secure location, such as a certified vault, a bank safe deposit box, or a high-security home safe. For larger investments, our company offers secure storage solutions.",
    },
    {
        question: "What should I do if I receive a damaged or wrong product?",
        answer: "If you receive a damaged or incorrect product, please contact our customer service team immediately within [e.g., 48 hours] of delivery. Provide details and photos of the issue, and we will guide you through the return and replacement process.",
    },
    {
        question: "Is there a tax on purchasing 24k gold bars from Save in Gold Company?",
        answer: "The taxation on purchasing 24k gold bars can vary depending on your local jurisdiction and specific tax laws. We recommend consulting with a tax professional in your region for precise information regarding applicable taxes.",
    },
    {
        question: "Can I sell my 24k gold bar purchased from Save in Gold Company easily?",
        answer: "Yes, 24k gold bars are highly liquid and can be easily sold globally. Save in Gold Company also offers a buy-back program for gold bars purchased from us, providing a convenient and trusted way to liquidate your investment.",
    },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
    <div className="bg-[#272727] rounded-lg border border-[#757575] font-normal w-full">
        <button
            onClick={onClick}
            className="w-full min-h-[4rem] px-4 sm:px-6 py-2 text-left flex justify-between items-start sm:items-center text-white hover:bg-[#444444] transition-colors rounded-lg"
        >
            <span className="font-medium text-sm sm:text-base leading-snug break-words w-[90%]">
                {faq.question}
            </span>
            <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                }`}
            />
        </button>
        {isOpen && (
            <div className="px-4 sm:px-6 pb-4">
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

    const leftColumn = faqData.slice(0, 3);
    const rightColumn = faqData.slice(3);

    return (
        <section className="py-16 lg:py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 font-montserrat faqs-padding">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl text-white font-medium">
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
