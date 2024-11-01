'use client';

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { ThreeDots } from 'react-loader-spinner';

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract query parameters
  const subcategory = searchParams.get('subcategory') || 'Any';
  const make = searchParams.get('make') || 'Any';
  const model = searchParams.get('model') || 'Any';
  const year = searchParams.get('year') || 'Any';

  // Fetch products based on search parameters
  const fetchProducts = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.post('/api/products/search', {
        subcategory,
        make,
        model,
        year
      });
      console.log("Resonse data : ",response.data.data);
      

      const fetchedProducts = response.data.data;

      setProducts(fetchedProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  }, [subcategory, make, model, year]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleProductClick = (slug) => {
    router.push(`/customer/pages/products/${slug}`);
  };

  const calculateOriginalPrice = (price, discount) => {
    return price - price * (discount / 100);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('en-PK', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3498db"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>

      {/* Display active search filters */}
      {/* <div className="mb-6 text-lg font-medium text-gray-700">
        <p>Filters:</p>
        <ul className="list-disc ml-6">
          <li>Subcategory: {subcategory}</li>
          <li>Make: {make}</li>
          <li>Model: {model}</li>
          <li>Year: {year}</li>
        </ul>
      </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {products.length > 0 ? (
          products.map((product) => {
            const originalPrice = calculateOriginalPrice(product.price, product.discount);
            return (
              <div
                key={product.id}
                className="bg-white shadow-md border border-gray-300 cursor-pointer relative h-[320px] md:h-[300px] w-[220px] md:w-[200px]"
              >
                {product.discount && (
                  <div className="absolute z-40 top-0 left-0 bg-red-100 text-red-600 font-normal text-sm px-1 py-0.5">
                    {product.discount.toFixed(2)}% OFF
                  </div>
                )}
                <div className="relative">
                  {product.images && product.images.length > 0 ? (
                    <div className='h-[240px] md:h-[220px] overflow-hidden'>
                      <motion.img
                        src={`${process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL}/${product.images[0]}`}
                        alt={product.name}
                        className="h-[240px] md:h-[220px] w-full object-contain mb-4 rounded bg-white"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => handleProductClick(product.slug)}
                      />
                    </div>
                  ) : (
                    <div className="h-[240px] md:h-[220px] w-full bg-gray-200 mb-4 rounded flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>
                <div className="px-2">
                  <div className="grid grid-cols-2 py-2">
                    <div className="flex items-center">
                      {product.discount ? (
                        <div className="flex items-center justify-center gap-3 flex-row-reverse">
                          <p className="text-xs font-normal text-gray-700 line-through">
                            Rs.{formatPrice(product.price)}
                          </p>
                          <p className="text-md font-bold text-red-700">
                            Rs.{formatPrice(originalPrice)}
                          </p>
                        </div>
                      ) : (
                        <p className="text-md font-bold text-gray-700">
                          Rs.{formatPrice(product.price)}
                        </p>
                      )}
                    </div>
                  </div>
                  <h3
                    className="text-sm font-normal text-gray-800 overflow-hidden hover:underline hover:text-blue-400 cursor-pointer"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      maxHeight: '3em',
                    }}
                    onClick={() => handleProductClick(product.slug)}
                  >
                    {product.name.toUpperCase()}
                  </h3>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center col-span-full py-8 text-gray-500">
            No products found with the specified filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
