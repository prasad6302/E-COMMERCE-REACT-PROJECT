import React, { children, createContext, useEffect, useState } from 'react'
import { products,discoutProducts } from '../ProjectData/data';

export const globalContext=createContext();

export default function MyContext({children}) {
const [data,setData]=useState([])
const [discountData,setdiscountData]=useState([])


const fetchData=()=>{
    setData(products);
    setdiscountData(discoutProducts)
    
};
useEffect(()=>{
    fetchData()
},[])
  return (
    <globalContext.Provider value={{data,discountData}}>
        {children}
    </globalContext.Provider>
  )
}
