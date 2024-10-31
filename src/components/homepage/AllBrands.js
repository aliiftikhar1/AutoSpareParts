import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function AllBrands() {
    const brands = [
        { id: 1, name: 'Audi', logo: '/brands/audi.png' },
        { id: 2, name: 'Toyota', logo: '/brands/toyota.png' },
        { id: 3, name: 'Honda', logo: '/brands/honda.png' },
        { id: 4, name: 'Kia', logo: '/brands/kia.png' },
        { id: 5, name: 'Suzuki', logo: '/brands/suzuki.png' },
        { id: 6, name: 'Hyundai', logo: '/brands/hyundai.png' },
    ];

    return (
        <div className="px-12 w-full h-auto flex flex-col py-8">
            <h1 className="text-2xl font-semibold mb-6">All Brands</h1>
            <div className="grid grid-cols-7 items-center overflow-x-auto w-80%">
                {brands.map((brand) => (
                    <div 
                        key={brand.id} 
                        className="w-40 h-40 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-md p-4"
                    >
                        <img src={brand.logo} alt={brand.name} className="w-20 h-20 object-contain mb-2" />
                        <p className="text-sm font-medium text-gray-700 uppercase">{brand.name}</p>
                    </div>
                ))}
                {/* Show All Brands Link */}
                <div className="flex items-center ml-4">
                    <a href="/all-brands" className="text-gray-900 hover:underline flex items-center space-x-1">
                        <span>Show All Brands</span>
                        <FaArrowRight
                         className="w-4 h-4 transform -rotate-45" />
                    </a>
                </div>
            </div>
        </div>
    );
}
