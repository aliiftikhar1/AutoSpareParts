import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';  // Use this icon as an example for the car illustration

export default function TwoCardsSection() {
    return (
        <div className=" h-[450px] px-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* First Card */}
            <div className="p-16 rounded-lg bg-[#FDB9BA] flex flex-col justify-between items-center  relative">
                <div>
                    <h1 className="text-3xl font-semibold mb-2 text-white">Are You Looking <br></br> For Auto Parts?</h1>
                    <p className="text-white mb-4">
                        We are committed to providing our customers with exceptional service.
                    </p>
                    <button className="mt-4 inline-flex items-center bg-[#FC0004] text-white py-4 px-4 rounded-lg text-sm hover:bg-red-600">
                        Get Started <FaArrowRight className="ml-2 transform -rotate-45" />
                    </button>
                </div>
                <FaCar className="absolute bottom-12 right-12 text-white text-8xl" />
            </div>

            {/* Second Card */}
            <div className="p-16 rounded-lg bg-gray-800 flex flex-col justify-between relative">
                <div>
                    <h1 className="text-2xl font-semibold mb-2 text-white">Do You Want to <br></br> Buy parts of any Car?</h1>
                    <p className="text-white mb-4">
                        We are committed to providing our customers with exceptional service.
                    </p>
                    <button className="mt-4 inline-flex items-center bg-black text-white py-4 px-4 rounded-lg text-sm hover:bg-red-600">
                        Get Started <FaArrowRight className="ml-2 transform -rotate-45" />
                    </button>
                </div>
                <FaCar className="absolute bottom-12 right-12 text-white text-8xl" />
            </div>
        </div>
    );
}
