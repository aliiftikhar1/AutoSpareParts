import ProductCard from "./ProductCard";
import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ExploreAllVehicleParts() {
  const [activeTab, setActiveTab] = useState("In Stock");
  const sliderRef = useRef(null);

  // Sample data for products
  const products = [
    { id: 1, image: "/spareparts/sparepart1.png", title: "Audi Engine", description: "Audi Engine complete A3/A4/A5/A6", price: "1,200,000" },
    { id: 2, image: "/spareparts/spare part (1).png", title: "Bosch 3330", description: "4.0 D5 PowerPulse Momentum 5dr AWD Geartronic", price: "3,000,000" },
    { id: 3, image: "/spareparts/spare part (1).jpg", title: "Shock Absorbers", description: "Absorb or dampen the compression as needed", price: "50,000" },
    { id: 4, image: "/spareparts/spare part (2).png", title: "Break Disk", description: "Hyundai i20 compatible brake disk", price: "21,800" },
    { id: 5, image: "/spareparts/spare part (3).png", title: "Pirelli Cinturato P7", description: "Pirelli Cinturato P7 Tyres starting from Rs 42,000", price: "42,000" },
  ];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="px-12 py-12">
      <h2 className="text-3xl font-bold mb-6">Explore All Vehicle Parts</h2>
      
      {/* Tabs */}
      <div className="flex space-x-8 mb-6">
        {["In Stock", "New Cars", "Used Cars"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${activeTab === tab ? "border-b-2 border-red-500 text-black" : "text-gray-500"} font-semibold`}
          >
            {tab}
          </button>
        ))}
      </div>

   
      <div className="relative">
        <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar space-x-4">
          {products.map((product) => (
            
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                cardwidth = '350px'
              cardHeight= '350px'
              />
            
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-start mt-4 space-x-4">
        <button onClick={scrollLeft} className=" hover:bg-gray-200 text-black rounded p-2 shadow-md">
          <FaArrowLeft />
        </button>
        <button onClick={scrollRight} className=" hover:bg-gray-200 text-black rounded p-2 shadow-md">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
