import React, { useContext } from 'react';
import { globalContext } from '../MyContext/MyContext';
import { FaPlus } from 'react-icons/fa';

export default function BigDiscount() {
  const { discountData } = useContext(globalContext);

  return (
    <div className="bg-blue-50 w-full py-10 px-4 sm:px-8 md:px-16 lg:px-40">
      <h1 className="text-3xl font-bold mb-12 text-center text-gray-800">Big Discount</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {discountData.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 min-h-[480px] flex flex-col">
            <span className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {product.discount}% Off
            </span>

            <div className="w-full h-70 flex items-center justify-center mt-6 mb-4">
              <img
                src={product.imgUrl}
                alt={product.productName}
                className="max-h-full max-w-full object-contain"/>
            </div>

<h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
  {product.productName}
</h2>

<div className="text-yellow-500 text-base md:text-lg mb-3">
  ⭐⭐⭐⭐⭐
</div>


            <div className="flex items-center justify-between mt-auto">
              <p className="text-xl font-bold text-gray-900">${product.price}</p>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}