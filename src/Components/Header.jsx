import React from 'react'
import { IoBagHandle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const cartItems=useSelector((state)=>state.cartItems.cart);
    const uniqueCount=cartItems.length
    return (
        <div className='flex items-center justify-between px-4 md:px-8 py-4 shadow-lg bg-white flex-wrap'>
            <Link to="/">
            <div className='flex items-center gap-2 cursor-pointer font-bold  text-2xl md:text-4xl'>
                <IoBagHandle />
                <h3>Mart</h3>
            </div>
            </Link>
            <div className='flex flex-wrap items-center cursor-pointer text-xl sm:text-2xl md:text-3xl space-x-4 sm:space-x-6 md:space-x-10 mt-4 md:mt-0'>           
                <Link to="/"><h3>Home</h3></Link>
                <Link to='/shop'><h3>Shop</h3></Link>
                <Link to='/cart'><h3>Cart</h3></Link>
                <h3><CgProfile /></h3>
                <Link to='/cart'><h3><FaShoppingCart /><span className="absolute top-0 right-7 bg-blue-900 text-white text-xs w-7 h-7 flex items-center justify-center rounded-full">{uniqueCount}</span></h3></Link>
            </div>

        </div>

    )
}
