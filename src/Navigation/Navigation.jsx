import React from 'react'
import Carousel from '../Pages/Carousel'
import ServiceData from '../Pages/ServiceData'
import BestSales from '../Pages/BestSales'
import NewArrivals from '../Pages/NewArrivals'


export default function Navigation() {
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
