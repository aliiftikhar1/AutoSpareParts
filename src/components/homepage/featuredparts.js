import React from 'react';

const FeatureParts = () => {
    const products = [
        {
            id: 1,
            name: 'Audi Engine',
            description: 'Audi Engine complete A3/A4/A5/A6',
            price: '1,200,000',
            originalPrice: '1,500,000',
            imageUrl: '/features/feature (1).jpeg',
        },
        {
            id: 2,
            name: 'Shock Absorbers',
            description: 'Absorb or dampen the compression',
            price: '50,000',
            originalPrice: '1,500,000',
            imageUrl: '/features/feature (1).png',
        },
        {
            id: 3,
            name: 'Audi Engine',
            description: 'Audi Engine complete A3/A4/A5/A6',
            price: '1,200,000',
            originalPrice: '1,500,000',
            imageUrl: '/features/feature (2).jpeg',
        },
        {
            id: 4,
            name: 'Shock Absorbers',
            description: 'Absorb or dampen the compression',
            price: '50,000',
            originalPrice: '1,500,000',
            imageUrl: '/features/feature (2).png',
        },
        {
            id: 5,
            name: 'Shock Absorbers',
            description: 'Absorb or dampen the compression',
            price: '50,000',
            originalPrice: '1,500,000',
            imageUrl: '/features/feature (3).jpeg',
        },
        // Add more products as needed
    ];

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-12">
            <h2 className="text-3xl font-bold text-left mb-12">Feature Parts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 text-left shadow-lg transition-all transform hover:scale-105 duration-300 bg-white rounded-lg h-80 flex flex-col justify-between">
                        <img src={product.imageUrl} alt={product.name} className="h-40 mx-auto"/>
                        <div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="text-black text-xl font-bold ">
                                Rs {product.price} <br></br> <span className="text-blue-900 line-through">Rs {product.originalPrice}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureParts;
