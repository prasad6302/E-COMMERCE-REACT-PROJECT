import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from "react-icons/fi";
import { FaPlus, FaMinus } from "react-icons/fa";
import { removeFromCart, increaseQty, decreaseQty } from '../ReduxToolKit-Store/productSlice'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cart);

  // calculation
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return total + price * qty;
  }, 0);

  return (
    <div className="flex flex-col mt-20 mb-20 lg:flex-row justify-between gap-10 px-4 xl:px-20 2xl:px-40">

      {/* Cart Items */}
      <div className="flex-1 space-y-6 max-w-full xl:max-w-[950px] 2xl:max-w-[1100px] mx-auto">
        {cartItems.length === 0 ? (
  <div>
   <h1 className="text-center text-blue-500 text-4xl font-bold py-10">Your cart is empty</h1>
<div className="w-full flex justify-center mt-10">
  <Link to="/">
    <button className="bg-green-50 border text-4xl flex items-center gap-5 font-bold py-4 px-8">
      <FaArrowLeftLong />
      Continue Shopping
    </button>
  </Link>
</div>

  </div>

) : (
  cartItems.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center relative gap-6 min-h-[180px] xl:min-h-[220px] 2xl:min-h-[260px]">
      {/* Remove Button */}
      <button
        onClick={() => dispatch(removeFromCart({ id: item.id }))}
        className="absolute top-4 right-4 text-2xl text-black"
      >
        <FiX />
      </button>

      {/* Image */}
      <div className="w-32 h-32 xl:w-40 xl:h-40 2xl:w-52 2xl:h-52 flex-shrink-0">
        <img
          src={item.imgUrl}
          alt={item.productName}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-[200px] text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-800 whitespace-nowrap xl:text-2xl 2xl:text-3xl">
          {item.productName}
        </h2>
        <p className="text-sm text-gray-500 mt-1 xl:text-base 2xl:text-lg">
          ${Number(item.price).toFixed(2)} × {item.quantity}
        </p>
        <p className="text-blue-800 font-bold text-md mt-1 xl:text-lg 2xl:text-xl">
          ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
        </p>
      </div>

      {/* Quantity Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(increaseQty({ id: item.id }))}
          className="bg-white border border-gray-300 p-2 xl:p-3 rounded hover:bg-blue-600 hover:text-white transition"
        >
          <FaPlus />
        </button>
        <button
          onClick={() => dispatch(decreaseQty({ id: item.id }))}
          className="bg-white border border-gray-300 p-2 xl:p-3 rounded hover:bg-blue-600 hover:text-white transition"
        >
          <FaMinus />
        </button>
      </div>
    </div>
  ))
)}

      </div>

      {/* Cart Summary */}
      {cartItems.length > 0 && (
  <div className="w-full lg:w-[300px] xl:w-[350px] bg-white shadow-md rounded-xl p-6 h-fit mx-auto lg:mx-0">
    <h3 className="text-xl xl:text-2xl font-semibold text-gray-800 mb-4">Cart Summary</h3>
    <hr className="mb-4" />
    <p className="text-gray-600 text-lg">Total Price:</p>
    <p className="text-blue-800 font-bold text-2xl mt-2">
      ${totalPrice.toFixed(2)}
    </p>
  </div>
)}


    </div>
  );
}
