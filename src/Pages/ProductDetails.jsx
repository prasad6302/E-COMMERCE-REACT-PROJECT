import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { globalContext } from '../MyContext/MyContext';
import image from '../assets/table.jpg'
import { addToCart } from '../ReduxToolKit-Store/productSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'; 

export default function ProductDetails() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { discountData, data } = useContext(globalContext);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundProduct =
      discountData.find((product) => product.id === id) ||
      data.find((product) => product.id === id);
    setProductInfo(foundProduct);
  }, [id]);

  if (!productInfo)
    return (
      <h1 className="text-center text-lg font-medium mt-10">Loading...</h1>
    );

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productInfo, quantity: Number(quantity) }));
    toast.success('Product has been added to cart');
  };

  return (
    <>
      <div className="relative w-full h-60 mb-10">
        <img
          src={image}
          alt="Top Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold">
            {productInfo.productName}
          </h1>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-10 flex flex-col md:flex-row lg:flex-row items-center gap-10">
        <div className="w-full flex justify-center lg:w-1/2">
          <img
            className="object-contain mr-10 max-h-[400px] w-full"
            src={productInfo.imgUrl}
            alt={productInfo.productName}
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-black-500">{productInfo.productName}</h1>

          <div className="flex gap-20 items-center font-bold">
            <span>⭐⭐⭐⭐⭐</span>
            <p>{productInfo.avgRating} ratings</p>
          </div>

          <div className="flex items-center gap-15">
            <p className="text-2xl font-bold text-black-500">${productInfo.price}</p>
            <p className="text-gray-700 text-xl">
              category: <span className="font-bold">{productInfo.category}</span>
            </p>
          </div>

          <p className="text-gray-700">{productInfo.shortDesc}</p>

          <div>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-20 h-10 border border-gray-400 rounded text-center mb-5"
            /><br />
            <button
              className="bg-blue-900 px-6 py-2 h-12 w-40 text-white rounded hover:bg-blue-800"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
