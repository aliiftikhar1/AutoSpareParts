import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import OnePartDetailCard from "./OnePartDetailCard";

export default function PopularParts() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const popularParts = [
        { id: 1, image: "/spareparts/sparepart1.png", title: "Audi Engine", description: "Audi Engine complete A3/A4/A5/A6", feature1: "High Performance", feature2: "Durable Build", feature3: "Warranty Included", price: "1,200,000", discountedPrice: "1,000,000" },
        { id: 2, image: "/spareparts/spare part (1).png", title: "Bosch 3330", description: "4.0 D5 PowerPulse Momentum 5dr AWD Geartronic", feature1: "High Efficiency", feature2: "Long Life", feature3: "Reliable Quality", price: "3,000,000", discountedPrice: "2,700,000" },
        { id: 3, image: "/spareparts/spare part (1).jpg", title: "Shock Absorbers", description: "Absorb or dampen the compression as needed", feature1: "Smooth Ride", feature2: "Premium Quality", feature3: "Affordable Price", price: "50,000", discountedPrice: "45,000" },
        { id: 4, image: "/spareparts/spare part (2).png", title: "Brake Disk", description: "Hyundai i20 compatible brake disk", feature1: "Durable Material", feature2: "Precision Engineering", feature3: "Reliable Stopping Power", price: "21,800", discountedPrice: "20,000" },
        { id: 5, image: "/spareparts/spare part (3).png", title: "Pirelli Cinturato P7", description: "Pirelli Cinturato P7 Tyres starting from Rs 42,000", feature1: "All-Weather Grip", feature2: "Enhanced Mileage", feature3: "Safety Tested", price: "42,000", discountedPrice: "40,000" },
        { id: 6, image: "/spareparts/sparepart1.png", title: "Audi Engine - New", description: "Enhanced Audi Engine with better performance", feature1: "Upgraded Model", feature2: "Fuel Efficient", feature3: "Lower Emissions", price: "1,500,000", discountedPrice: "1,250,000" },
        { id: 7, image: "/spareparts/spare part (1).png", title: "Bosch 3330 - Turbo", description: "Bosch engine with turbo compatibility", feature1: "Turbo Compatibility", feature2: "High Power Output", feature3: "Reliable Performance", price: "3,200,000", discountedPrice: "2,900,000" },
        { id: 8, image: "/spareparts/spare part (3).png", title: "Pirelli P Zero", description: "Pirelli P Zero high-performance tyres", feature1: "Ultimate Grip", feature2: "Racing Quality", feature3: "Enhanced Durability", price: "60,000", discountedPrice: "55,000" },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < popularParts.length - 1 ? prevIndex + 1 : 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : popularParts.length - 1
        );
    };

    return (
        <div className="h-[600px] bg-black text-white px-12 flex flex-col justify-center">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold">Popular Parts</h1>
                <button className="text-gray-400 flex items-center">
                    View All <FaArrowRight className="ml-1" />
                </button>
            </div>

            {/* Parts Slider */}
            <div className="relative flex items-center mt-10">
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-300 space-x-4"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {popularParts.map((part, index) => (
                           
                                <OnePartDetailCard
                                    image={part.image}
                                    title={part.title}
                                    description={part.description}
                                    feature1={part.feature1}
                                    feature2={part.feature2}
                                    feature3={part.feature3}
                                    price={part.price}
                                    discountedPrice={part.discountedPrice}
                                />
                           
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-start mt-4 space-x-4">
                <button
                    onClick={handlePrev}
                    className="p-2 rounded-full  border-white px-4 border-2"
                >
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.559998 6.31006C0.559998 6.07006 0.653331 5.87006 0.839998 5.71006L6 0.550059C6.16 0.390059 6.35333 0.310059 6.58 0.310059C6.80666 0.310059 7.00666 0.390059 7.18 0.550059C7.35333 0.710059 7.44 0.910059 7.44 1.15006C7.44 1.39006 7.34666 1.59006 7.16 1.75006L2.6 6.31006L7.16 10.8701C7.32 11.0301 7.4 11.2301 7.4 11.4701C7.4 11.7101 7.32 11.9101 7.16 12.0701C7 12.2301 6.80666 12.3101 6.58 12.3101C6.35333 12.3101 6.16 12.2301 6 12.0701L0.839998 6.91006C0.653331 6.75006 0.559998 6.55006 0.559998 6.31006Z" fill="white"/>
</svg>

                </button>
                <button
                    onClick={handleNext}
                    className="p-2 rounded-full border-white px-4 border-2"
                >
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_77_3114)">
<path d="M9.17737 6.91006L4.02168 12.0701C3.86182 12.2301 3.66864 12.3101 3.44217 12.3101C3.21569 12.3101 3.01586 12.2301 2.84267 12.0701C2.66948 11.9101 2.58289 11.7101 2.58289 11.4701C2.58289 11.2301 2.67614 11.0301 2.86265 10.8701L7.41884 6.31006L2.86265 1.75006C2.67614 1.59006 2.58289 1.39006 2.58289 1.15006C2.58289 0.910059 2.66948 0.710059 2.84267 0.550059C3.01586 0.390059 3.21569 0.310059 3.44217 0.310059C3.66864 0.310059 3.86182 0.390059 4.02168 0.550059L9.17737 5.71006C9.36388 5.87006 9.45714 6.07006 9.45714 6.31006C9.45714 6.55006 9.36388 6.75006 9.17737 6.91006Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_77_3114">
<rect width="11.96" height="12" fill="white" transform="matrix(1 0 0 -1 0.0200195 12.3101)"/>
</clipPath>
</defs>
</svg>

                </button>
            </div>
        </div>
    );
}
