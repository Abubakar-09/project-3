import React from 'react'
import ProductsCards from './ProductsCards'
import Link from 'next/link'
import Products from './Products'

const OurProducts = () => {
  return (
    <>
      <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-center m-auto py-6'>
        <div className="demo text-2xl font-bold">Our Products</div>
      </div>
      <Products type="All" length="8"/> 
      <div className='w-[80vw] max-md:w-[90vw] m-auto md:py-5 max-md:py-20 flex  justify-center'>
        <Link href='/allproduct'><button className='w-[20vw] max-md:w-[70vw] p-3 rounded-lg text-white text-sm font-semibold bg-[#DB4444]'>View All Products</button></Link>
      </div>
    </>
  )
}

export default OurProducts