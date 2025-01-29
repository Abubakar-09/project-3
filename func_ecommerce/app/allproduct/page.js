import React from 'react'
import ProductsCards from '../components/ProductsCards'
import Link from 'next/link'
import Products from '../components/Products'


const page = () => {
    return (
        <>
            <div className='py-16'>
                <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-center m-auto'>
                    <div className="demo text-2xl font-bold">All Products</div>
                </div>
                <Products type="All" length="10"/>
            </div>
        </>
    )
}

export default page