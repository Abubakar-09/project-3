'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [wishlist_products, setwishlist_products] = useState([])
    const router = useRouter()
    const [data, setdata] = useState()

    useEffect(() => {
        const data = async () => {
            let a = await (await fetch('/api/wishlist', { cache: 'no-store' })).json()
            setwishlist_products(a)
        }
        data()
    }, [data])


    const handleWishlist = async (e) => {
        const res = await fetch('/api/wishlist', {
            cache: 'no-store',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        });
        const b = await res.json()
        router.refresh()
        setdata(b)
    }

    const handleAddToCart = async (e) => {
        let a = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        })
        router.refresh()
    }

    return (
        <>
            <div className='w-[80vw] md:min-h-[70vh] py-8 m-auto max-md:flex-col gap-y-4 md:justify-between flex flex-wrap max-md:w-[90vw]'>

                {wishlist_products ? (wishlist_products.map((e, index) => {
                    return <div key={index}>
                        <div className='border-[1px] relative border-black md:hover:scale-105 flex items-center md:w-[18vw] rounded-lg max-md:h-[65vh] h-[55vh] text-black text-sm'>
                            <div className='w-[90%] m-auto  h-[90%] flex flex-col justify-between'>
                                {/* Image Container */}
                                <div className='h-[60%] w-full relative overflow-hidden'>
                                    <img
                                        src={`${e.img ? e.img : 'none'}`}
                                        alt="products_img"
                                        className='w-full h-full object-cover object-center'
                                    />
                                </div>

                                {/* Product Name */}
                                <div className='font-semibold cursor-pointer z-10 text-center mt-2'>
                                    <Link href={`${e.type}/${e.name}`}>{e.name}</Link>
                                </div>

                                {/* Add to Cart Button */}
                                {e.stock>0? <div onClick={() => { handleAddToCart(e) }} className='flex cursor-pointer z-10 justify-center h-[15%] hover:scale-105 border-[1px] border-black items-center mt-2'>
                                    <p>Add To Cart : ${e.price}</p>
                                </div>:<div className='flex cursor-pointer z-10 justify-center h-[15%] border-[1px] border-black items-center mt-2'>
                                    <p>Out Of Stock : ${e.price}</p>
                                </div>}
                            </div>

                            <div className="absolute p-2 top-1 right-1 hover:scale-125 rounded-full border-[1px] border-black">
                                <svg onClick={() => { handleWishlist(e) }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={`${e.wishlist == true ? "red" : "none"}`} stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                            </div>
                        </div>
                    </div>
                })) : <>no products...</>}

            </div>
        </>
    )
}

export default page