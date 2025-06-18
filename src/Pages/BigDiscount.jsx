import React, { useContext } from 'react';
import { globalContext } from '../MyContext/MyContext';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../ReduxToolKit-Store/productSlice';
import { toast } from 'react-toastify';

export default function BigDiscount() {
  const { discountData } = useContext(globalContext);
  const dispatch =useDispatch();

  return (
 <div className="w-full bg-blue-50 py-10 px-4">
  <div className="w-full max-w-[1225px] mx-auto">
    <h1 className="text-3xl font-bold mb-12 text-center text-gray-800">Best Discounts</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-10 items-stretch">
    {discountData.map((product) => (
      <div
        key={product.id}
        className="flex flex-col h-full bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 relative"
      >

        {/* Discount badge */}
        <span className="absolute top-4 left-4 bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
          {product.discount}% Off
        </span>
        {/* Image Box */}
        <div className="w-full h-[250px] flex items-center justify-center mb-4 mt-6">
          <Link to={`/${product.id}`}>
            <img
              src={product.imgUrl}
              alt={product.productName}
              className="max-h-full max-w-full object-contain"
            />
          </Link>
        </div>

        {/* Product Name */}
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          {product.productName}
        </h2>

        {/* Rating */}
        <div className="text-yellow-500 text-base md:text-lg mb-3">⭐⭐⭐⭐⭐</div>

        {/* Price and Button at Bottom */}
        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-bold text-gray-900">${product.price}</p>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-blue-600 hover:text-white transition" onClick={()=>{dispatch(addToCart(product));toast.success("Product has been added to cart")}}>
            <FaPlus />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  )}