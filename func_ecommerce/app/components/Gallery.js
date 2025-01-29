import React from 'react'

const Gallery = () => {
  return (
    <>
    <div className='w-[80vw] flex gap-2 overflow-hidden max-md:w-[90vw] items-center justify-center m-auto py-6'>
      <div className="demo text-2xl font-bold">Gallery</div>
    </div>
    <div className='w-[80vw] md:h-[50vh] flex md:py-2 gap-y-7 max-md:gap-y-[23px] gap-2 max-md:flex-col max-md:w-[90vw] m-auto md:my-2'>
        <div className='md:w-[50%] w-full max-md:h-[60vh] bg-[url("/product_2.png")] rounded-xl bg-no-repeat  bg-cover bg-center'>
        </div>
        <div className='md:w-[50%] w-full max-md:h-[50vh] flex justify-center flex-wrap gap-2'>
            <div className="demo w-[45%] rounded-xl bg-[url('/product_3.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="demo w-[45%] rounded-xl bg-[url('/product_4.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="demo w-[45%] rounded-xl bg-[url('/product_5.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="demo w-[45%] rounded-xl bg-[url('/product_1.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>
      
    </div>
  </>
  )
}

export default Gallery