import React from 'react'
import Carousel from './Carousel'
import ServiceData from './ServiceData'
import BigDiscount from './BigDiscount'
import NewArrivals from './NewArrivals'
import BestSales from './BestSales'

export default function Home() {
  return (
    <div>
            <Carousel/>
            <ServiceData/>
            <BigDiscount/>
            <NewArrivals/>
            <BestSales/>
            
    </div>
  )
}
