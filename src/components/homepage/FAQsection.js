import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How do I know if the part will fit my vehicle?",
            answer: "You can check compatibility by matching the part number or consulting our customer service for vehicle-specific recommendations."
        },
        {
            question: "What is your return and refund policy?",
            answer: "We offer a 30-day return policy on most parts. Please ensure the part is in unused condition and keep the receipt for a full refund."
        },
        {
            question: "How long does shipping take, and what are the shipping costs?",
            answer: "Shipping usually takes 3-5 business days. Costs vary based on location and shipping method, which can be calculated during checkout."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept credit cards, debit cards, PayPal, and other popular payment methods for your convenience."
        },
        {
            question: "Can I track my order?",
            answer: "Yes, once your order is shipped, you’ll receive a tracking number via email that you can use to monitor the delivery status."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship internationally. Shipping fees and delivery times may vary based on your location."
        },
        {
            question: "What should I do if the part I need is out of stock?",
            answer: "You can sign up for back-in-stock notifications or contact customer service to check on future availability."
        },
        {
            question: "Are all parts covered under warranty?",
            answer: "Most parts come with a manufacturer’s warranty. Check the product details or contact support for specific warranty information."
        },
        {
            question: "Can I cancel my order after it’s been placed?",
            answer: "Order cancellations are possible within a limited timeframe after purchase. Contact support as soon as possible for assistance."
        },
        {
            question: "How do I contact customer service for more help?",
            answer: "You can reach customer service via phone, email, or live chat on our website during business hours."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full px-20 py-10">
            <h1 className="text-3xl font-semibold mb-6">FAQ's</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Column */}
                <div className="border-2 border-gray-200 rounded-l-lg p-2">
                    {faqs.slice(0, 5).map((faq, index) => (
                        <div key={index} className="py-4 border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h2 className="text-xl font-medium text-gray-800">{faq.question}</h2>
                                <FaChevronDown
                                    className={`text-xl text-gray-600 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {activeIndex === index && (
                                <p className="mt-2 text-gray-600 text-sm">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Second Column */}
                <div className="border-2 border-gray-200 rounded-r-lg p-2">
                    {faqs.slice(5).map((faq, index) => (
                        <div key={index + 5} className="py-4 border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index + 5)}
                            >
                                <h2 className="text-xl font-medium text-gray-800">{faq.question}</h2>
                                <FaChevronDown
                                    className={`text-xl text-gray-600 transform transition-transform ${activeIndex === index + 5 ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {activeIndex === index + 5 && (
                                <p className="mt-2 text-gray-600 text-sm">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
