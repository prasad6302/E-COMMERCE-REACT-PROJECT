import React from 'react'
import ProductDetails from './ProductDetails'
import DiscriptionToggle from './DiscriptionToggle'
import LikeProducts from './LikeProducts'
export default function ProductConcat() {
  return (
    <div>
        <ProductDetails/>
        <DiscriptionToggle/>
        <LikeProducts/>
    </div>
  )
}
