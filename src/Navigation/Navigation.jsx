import React from 'react'
import Carousel from '../Pages/Carousel'
import ServiceData from '../Pages/ServiceData'
import BestSales from '../Pages/BestSales'
import NewArrivals from '../Pages/NewArrivals'
import BigDiscount from '../Pages/BigDiscount'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import ProductConcat from '../Pages/ProductConcat'


export default function Navigation() {
  return (
    <div>

      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/:id' element={<ProductConcat/>}/>
      </Routes>

    </div>
  )
}
