import React from 'react';
import NewArrivalCard from './NewArrivalCard';

export default function NewArrival() {
    // Extend the product list to have 9 items by repeating existing products
    const products = [
        { id: 1, image: "/spareparts/sparepart1.png", title: "Audi Engine", description: "Audi Engine complete A3/A4/A5/A6", price: "1,200,000" },
        { id: 2, image: "/spareparts/spare part (1).png", title: "Bosch 3330", description: "4.0 D5 PowerPulse Momentum 5dr AWD Geartronic", price: "3,000,000" },
        { id: 3, image: "/spareparts/spare part (1).jpg", title: "Shock Absorbers", description: "Absorb or dampen the compression as needed", price: "50,000" },
        { id: 4, image: "/spareparts/spare part (2).png", title: "Brake Disk", description: "Hyundai i20 compatible brake disk", price: "21,800" },
        { id: 5, image: "/spareparts/spare part (3).png", title: "Pirelli Cinturato P7", description: "Pirelli Cinturato P7 Tyres starting from Rs 42,000", price: "42,000" },
        { id: 6, image: "/spareparts/sparepart1.png", title: "Audi Engine", description: "Audi Engine complete A3/A4/A5/A6", price: "1,200,000" },
        { id: 7, image: "/spareparts/spare part (1).png", title: "Bosch 3330", description: "4.0 D5 PowerPulse Momentum 5dr AWD Geartronic", price: "3,000,000" },
        { id: 8, image: "/spareparts/spare part (1).jpg", title: "Shock Absorbers", description: "Absorb or dampen the compression as needed", price: "50,000" },
        { id: 9, image: "/spareparts/spare part (2).png", title: "Brake Disk", description: "Hyundai i20 compatible brake disk", price: "21,800" },
    ];

    return (
        <div className="w-full h-auto flex flex-col items-start px-12 py-8">
            <h1 className="text-3xl font-semibold mb-6">New Arrivals</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6">
                {products.map((product) => (
                    <NewArrivalCard 
                        key={product.id} 
                        image={product.image} 
                        name={product.title} 
                        price={product.price} 
                        rating={4.5}  // You can replace with actual rating if available
                        reviews={88}  // Replace with actual review count if available
                    />
                ))}
            </div>
        </div>
    );
}
