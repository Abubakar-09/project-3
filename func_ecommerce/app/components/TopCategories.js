import React from 'react'

const TopCategories = () => {
  return (
    <>
      <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center justify-start m-auto py-6'>
        <div className="demo text-2xl font-bold">Top Categories</div>
      </div>
      <div className='w-[80vw] flex md:py-2 gap-y-7 max-md:gap-y-[53px] justify-between gap-1 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
        <div className="demo h-[50vh] w-full rounded-xl flex items-end bg-[url('/product_1.png')] bg-cover bg-no-repeat bg-center">
            <div className="demo bg-black w-full px-6 rounded-b-xl h-[10vh] py-3 bg-opacity-60">
                <p className="demo font-semibold text-white">Wing Chair</p>
                <p className="demo text-[10px] text-slate-300">3582 Products</p>
            </div>
        </div>
        <div className="demo h-[50vh] w-full rounded-xl flex items-end bg-[url('/product_2.png')] bg-cover bg-no-repeat bg-center">
            <div className="demo bg-black w-full px-6 rounded-b-xl h-[10vh] py-3 bg-opacity-60">
                <p className="demo font-semibold text-white">Wing Chair</p>
                <p className="demo text-[10px] text-slate-300">3582 Products</p>
            </div>
        </div>
        <div className="demo h-[50vh] w-full rounded-xl flex items-end bg-[url('/product_3.png')] bg-cover bg-no-repeat bg-center">
            <div className="demo bg-black w-full px-6 rounded-b-xl h-[10vh] py-3 bg-opacity-60">
                <p className="demo font-semibold text-white">Wing Chair</p>
                <p className="demo text-[10px] text-slate-300">3582 Products</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default TopCategories