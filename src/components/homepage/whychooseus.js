import { FaTags, FaCar, FaMoneyBillWave, FaTools } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <div className="px-12 w-full h-[400px] flex flex-col items-start justify-center">
            <div className="mb-16 text-left">
                <h1 className="text-2xl font-bold">Why Choose Us?</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
                <div className="flex flex-col items-center">
                    <FaTags className="text-4xl text-blue-500 mb-4" />
                    <div className="text-left mt-2">
                        <h2 className="text-lg font-semibold">Special Financing Offers</h2>
                        <p className="text-gray-600">
                            Our stress-free finance department that can find financial solutions to save you money.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <FaCar className="text-4xl text-pink-500 mb-4" />
                    <div className="text-left mt-2">
                        <h2 className="text-lg font-semibold">Trusted Car Dealership</h2>
                        <p className="text-gray-600">
                            Our stress-free finance department that can find financial solutions to save you money.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <FaMoneyBillWave className="text-4xl text-blue-500 mb-4" />
                    <div className="text-left mt-2">
                        <h2 className="text-lg font-semibold">Transparent Pricing</h2>
                        <p className="text-gray-600">
                            Our stress-free finance department that can find financial solutions to save you money.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <FaTools className="text-4xl text-pink-500 mb-4" />
                    <div className="text-left mt-2">
                        <h2 className="text-lg font-semibold">Expert Car Service</h2>
                        <p className="text-gray-600">
                            Our stress-free finance department that can find financial solutions to save you money.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
