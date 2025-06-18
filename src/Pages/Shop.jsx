import React, { useState } from 'react';
import image from '../assets/table.jpg';
import { products } from '../ProjectData/data';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addToCart } from '../ReduxToolKit-Store/productSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function Shop() {
  const [selectedSize, setSelectedSize] = useState('')
  const [search, setSearch] = useState('')
  const dispatch=useDispatch();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-70 mb-10">
        <img
          src={image}
          alt="Top Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">Products</h1>
        </div>
      </div>

      {/* Dropdown for Category Selection */}
      <div className="flex flex-wrap gap-4 justify-center px-4 mb-8">
        {/* Filter By Category */}
        <div className="flex-1 min-w-[250px]">
          <select
            className="w-50 ml-5 bg-blue-900 border p-2 rounded text-white"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option className="bg-white text-black" value="">Filter By Category</option>
            <option className="bg-white text-black" value="Sofa">Sofa</option>
            <option className="bg-white text-black" value="chair">Chairs</option>
            <option className="bg-white text-black" value="mobile">Mobiles</option>
            <option className="bg-white text-black" value="watch">Watchs</option>
            <option className="bg-white text-black" value="wireless">Wireless</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mr-40 min-w-[250px]">
          <div className="flex items-center w-full bg-gray-200 rounded-full px-4 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent flex-grow text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <FaSearch className="text-gray-700" />
          </div>
        </div>
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8  lg:px-23 lg:pb-30  md:px-6 md:pb-10">
        {products.filter((item) => (
          (search === '' || item.productName.toLowerCase().includes(search.toLowerCase())) &&
          (selectedSize === '' || selectedSize.toLowerCase() == item.category.toLowerCase())
        )
        ).length === 0 ? (
          <h1 className="col-span-full items-center text-center text-black text-6xl mt-30 font-medium">Product Not Found !!</h1>
        ) : (products.filter((item) => (
          (search === '' || item.productName.toLowerCase().includes(search.toLowerCase())) &&
          (selectedSize === '' || selectedSize.toLowerCase() == item.category.toLowerCase())
        )))
          .map((product) => (

            <div
              key={product.id}
              className="flex  flex-col w-full  bg-white  rounded-xl shadow-md hover:shadow-lg transition duration-300 relative"
            >
              {/* Product Image */}
              <div className="w-full  h-full flex items-center justify-center p-4 mt-4">
                <Link to={`/${product.id}`}>
                  <img
                    src={product.imgUrl}
                    alt={product.productName}
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="px-5 pb-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.productName}
                </h2>

                <div className="text-yellow-500 text-base mb-3">⭐⭐⭐⭐⭐</div>

                {/* Price & Button */}
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-xl font-bold text-gray-900">${product.price}</p>
                  <button className="bg-gray-200 p-2 rounded-full hover:bg-blue-600 hover:text-white transition" onClick={()=>{dispatch(addToCart(product));toast.success("Product has been added to cart")}}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
