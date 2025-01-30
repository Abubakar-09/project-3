'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [wishlist, setwishlist] = useState(0)
    // const [cart, setcart] = useState(0)
    // const [order, setorder] = useState(0)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // useEffect(() => {
    //   let wishlistdata = async()=>{
    //     let data = await fetch('/api/wishlist', {cache:'no-store'})
    //     let b = await data.json()
    //     setwishlist(b.length)
    //   }
    //   wishlistdata()
    //   let cartdata = async()=>{
    //     let data = await fetch('/api/cart', {cache:'no-store'})
    //     let b = await data.json()
    //     setcart(b.length)
    //   }
    //   cartdata()
    //   let orderdata = async()=>{
    //     let data = await fetch('/api/order', {cache:'no-store'})
    //     let b = await data.json()
    //     setorder(b.length)
    //   }
    //   orderdata() 
    // }, [])
    

    return (
        <>
            <div className='flex items-center md:justify-between w-[80vw] md:mb-5 m-auto max-md:w-[90vw] h-[10vh]'>
                <div className="font-extrabold text-2xl max-md:w-[60%]">LOGO</div>

                {/* Hamburger Icon */}
                <div
                    className="cursor-pointer max-md:w-[15%] md:hidden"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:block">
                    <ul className="flex gap-4 items-center">
                        <Link href={'/'}><li className="cursor-pointer">Home</li></Link>
                        <Link href={'/about'}><li className="cursor-pointer">About</li></Link>
                        <Link href={'/contact'}><li className="cursor-pointer">Contact</li></Link>
                        <Link href={'/faqs'}><li className="cursor-pointer">Explore</li></Link>
                    </ul>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-4">
                    <div className="cursor-pointer relative">
                        <Link href={'/wishlist'}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg></Link>
                        // <div className='p-1 rounded-full text-white bg-pink-600 absolute top-[-50%] right-[-35%] text-[10px]'>{wishlist}</div>
                    </div>
                    <div className="cursor-pointer relative">
                    <Link href={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg></Link>
                        // <div className='p-1 rounded-full text-white bg-red-600 absolute top-[-50%] right-[-35%] text-[10px]'>{cart}</div>
                    </div>
                    <div className="cursor-pointer relative">
                    <Link href={'/order'}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg></Link>
                        // <div className='p-1 rounded-full text-white bg-red-600 absolute top-[-50%] right-[-35%] text-[10px]'>{order}</div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden w-full bg-white shadow-md">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <Link href={'/'}><li className="cursor-pointer">Home</li></Link>
                        <Link href={'/about'}><li className="cursor-pointer">About</li></Link>
                        <Link href={'/contact'}><li className="cursor-pointer">Contact</li></Link>
                        <Link href={'/faqs'}><li className="cursor-pointer">Explore</li></Link>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
