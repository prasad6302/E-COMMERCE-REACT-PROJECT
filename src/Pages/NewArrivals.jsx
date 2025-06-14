import React from 'react'
import { useContext } from 'react'
import { globalContext } from '../MyContext/MyContext'
import { FaPlus } from 'react-icons/fa'

export default function NewArrivals() {
    const {data}=useContext(globalContext)
    const filter=data.filter(item=>item.category==='mobile' || item.category==='wireless')
  return (
    <div>
          <div className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-40">
              <h1 className="text-3xl font-bold mb-12 text-center text-gray-800">New Arrivals</h1>
        
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filter.map((product) => (
                  <div
                    key={product.id}
                    className="relative bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 min-h-[480px] flex flex-col">
        
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
                      <button className="bg-gray-200 p-2 rounded-full hover:bg-blue-600 hover:text-white transition" >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}