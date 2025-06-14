import React, { useContext, useEffect, useState } from 'react'
import { globalContext } from '../MyContext/MyContext';
import { useParams } from 'react-router-dom';

export default function DiscriptionToggle() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const { discountData, data } = useContext(globalContext);
  const [active, setActive] = useState('description');

  useEffect(() => {
    const foundProduct = discountData.find((product) => product.id === id) ||
      data.find((product) => product.id === id)
    setProductInfo(foundProduct)
  }, [id])
  if (!productInfo) return <h1 className="text-center text-xl py-10">Loading...</h1>
  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-32 mt-10 mb-10'>
      <div className='flex gap-6  pb-2 mb-4'>
        <button onClick={() => setActive('description')} className={`pb-1 font-bold text-xl ${active==='description'? 'text-black  border-black':'text-gray-500 hover:text-black'}`}>Description</button>
        <button onClick={() => setActive('reviews')} className={`pb-1 font-bold text-xl ${active==='reviews'? 'text-black  border-black':'text-gray-500 hover:text-black'}`}>Reviews({productInfo && productInfo.reviews ? productInfo.reviews.length : 0})</button>
      </div>
      {active === 'description' &&
        <p className='text-gray-700 '>{productInfo.description}</p>
      }
      {active === 'reviews' && (
        <div >
          {productInfo.reviews.map((review, index) => {
            return (
              <div key={index}>
                <h4 className='font-bold text-xl'>Prasad</h4>
                <p className='text-yellow-500 text-lg font-medium '>{review.rating} (rating)</p>
                <p className='text-gray-600 mt-2'>{review.text}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
