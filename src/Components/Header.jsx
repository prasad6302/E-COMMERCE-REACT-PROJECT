import React from 'react'
import { IoBagHandle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

export default function Header() {
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
                <h3>Shop</h3>
                <h3>Cart</h3>
                <h3><CgProfile /></h3>
                <h3><FaShoppingCart /></h3>
            </div>

        </div>

    )
}
