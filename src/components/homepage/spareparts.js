import ProductCard from "./ProductCard";
import { useState } from "react";

export default function SpareParts() {
  const [activeTab, setActiveTab] = useState("In Stock");

  // Expanded sample data for products using existing images
  const products = [
    { id: 1, image: "/spareparts/sparepart1.png", title: "Audi Engine", description: "Audi Engine complete A3/A4/A5/A6", price: "1,200,000" },
    { id: 2, image: "/spareparts/spare part (1).png", title: "Bosch 3330", description: "4.0 D5 PowerPulse Momentum 5dr AWD Geartronic", price: "3,000,000" },
    { id: 3, image: "/spareparts/spare part (1).jpg", title: "Shock Absorbers", description: "Absorb or dampen the compression as needed", price: "50,000" },
    { id: 4, image: "/spareparts/spare part (2).png", title: "Break Disk", description: "Hyundai i20 compatible brake disk", price: "21,800" },
    { id: 5, image: "/spareparts/spare part (3).png", title: "Pirelli Cinturato P7", description: "Pirelli Cinturato P7 Tyres starting from Rs 42,000", price: "42,000" },
    { id: 6, image: "/spareparts/sparepart1.png", title: "Audi Engine", description: "Audi Engine complete A3/A4/A5/A6", price: "1,200,000" },
    { id: 7, image: "/spareparts/spare part (1).png", title: "Bosch 3330", description: "4.0 D5 PowerPulse Momentum 5dr AWD Geartronic", price: "3,000,000" },
    { id: 8, image: "/spareparts/spare part (1).jpg", title: "Shock Absorbers", description: "Absorb or dampen the compression as needed", price: "50,000" },
    { id: 9, image: "/spareparts/spare part (2).png", title: "Break Disk", description: "Hyundai i20 compatible brake disk", price: "21,800" },
    { id: 10, image: "/spareparts/spare part (3).png", title: "Pirelli Cinturato P7", description: "Pirelli Cinturato P7 Tyres starting from Rs 42,000", price: "42,000" },
  ];

  return (
    <div className="px-12 py-12">
      <h2 className="text-3xl font-bold mb-6">Spare Parts</h2>

      <div className="grid grid-cols-4 gap-6">
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
  );
}
