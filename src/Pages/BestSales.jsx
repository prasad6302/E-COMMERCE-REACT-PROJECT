import React, { useContext } from "react";
import { globalContext } from "../MyContext/MyContext";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit-Store/productSlice";
import { toast } from 'react-toastify';

export default function BestSales() {
    const { data } = useContext(globalContext);
    const sofas = data.filter(item => item.category === 'sofa');
  const dispatch =useDispatch();
//when there is a lessthan 3 products in a row it will be in middle
    const chunked = [];
    for (let i = 0; i < sofas.length; i += 3) {
        chunked.push(sofas.slice(i, i + 3));
    }

    return (
        <div className="w-full bg-blue-50 py-10 px-4">
            <div className="w-full max-w-[1225px] mx-auto">
                <h1 className="text-3xl font-bold mb-12 text-center text-gray-800">Best Sales</h1>

                {chunked.map((product, index) => {
                    const isLastRow = index === chunked.length - 1;
                    const useFlex = isLastRow && product.length < 3;

                    return (
                        <div
                            key={index}
                            className={`${useFlex
                                ? 'flex justify-center gap-10 flex-wrap'
                                : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'
                                } mb-10`}
                        >
                            {product.map((product) => (
                                <div
                                    key={product.id}
                                    className="relative bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 min-h-[480px] flex flex-col max-w-sm w-full"
                                >


                                    <div className="w-full h-[250px] flex items-center justify-center mb-4 mt-6">
                                        <Link to={`/${product.id}`}>
                                            <img
                                                src={product.imgUrl}
                                                alt={product.productName}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </Link>
                                    </div>

                                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                                        {product.productName}
                                    </h2>

                                    <div className="text-yellow-500 text-base md:text-lg mb-3">⭐⭐⭐⭐⭐</div>

                                    <div className="flex items-center justify-between mt-auto">
                                        <p className="text-xl font-bold text-gray-900">${product.price}</p>
                                        <button className="bg-gray-200 p-2 rounded-full hover:bg-blue-600 hover:text-white transition" onClick={()=>{dispatch(addToCart(product));toast.success("Product has been added to cart")}}>
                                            <FaPlus />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                })}

            </div>
        </div>
    );
}
