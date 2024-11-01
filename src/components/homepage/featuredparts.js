import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const FeatureParts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products/featuredproducts');

                console.log("TOP RADET Products are: ", response.data.data);
                setProducts(response.data.data); // Assuming the API returns products in `data.data`
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);
    const calculateDiscountedPrice = (price, discount) => {
        if (!price || !discount) return price; // If no discount, return original price
        return price - (price * discount) / 100;
    };

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-12">
            <h2 className="text-3xl font-bold text-left mb-12">Feature Parts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 text-left shadow-lg transition-all transform hover:scale-105 duration-300 bg-white rounded-lg h-80 flex flex-col justify-between">
                        <img src={`${process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL}/${product.images[0].url}`} alt={product.name} className="h-40 mx-auto" />
                        <div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p
                                className="text-gray-600 leading-relaxed line-clamp-1"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />

                            <p className="text-black text-xl font-bold">
                                Rs {calculateDiscountedPrice(product.price, product.discount).toLocaleString()}
                                <br />
                                <span className="text-blue-900 line-through">Rs {product.price.toLocaleString()}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureParts;
