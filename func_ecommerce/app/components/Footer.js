import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='w-screen 2xl:h-[40vh] md:h-[60vh] py-6 max-md:flex max-md:gap-3 border-t border-t-slate-500 max-md:flex-col'>
        {/*  */}
        <div className=' md:h-[94%] flex justify-center items-center'>

          <div className='w-[80vw] max-md:w-[90vw] max-md:flex-col md:items-center max-md:gap-12 md:h-full flex gap-3 justify-center  m-auto'>
            {/*  */}
            <div className="demo md:w-[40%] flex flex-col gap-3 md:h-[70%]">
              <Link href='/'><div className="d font-semibold flex gap-2 items-center text-xl">
                <img src="/Icon.png" className='' alt="LOGO" />
                Comforty
              </div>
              </Link>
              <p className='text-[10px] pr-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod omnis consequuntur ullam reprehenderit dicta cumque doloremque repellendus obcaecati voluptate.</p>
            </div>
            {/*  */}
            <div className="demo md:w-[20%] flex flex-col gap-3 md:h-[70%]">
              <div className="democ text-2xl font-extrabold">Categories</div>
              {/* <div className="demo text-lg font-bold">Subscribe</div> */}
              {/* <div className="demo flex flex-col gap-2"> */}
              <p className='text-sm'>Park Bench</p>
              <p className='text-sm'>Wooden Chair</p>
              <p className='text-sm'>School Bench</p>
              <p className='text-sm'>Tables</p>
              <p className='text-sm'>Baord</p>
              <p className='text-sm'>Demo Product</p>
              {/* </div> */}
            </div>
            {/*  */}
            <div className="demo md:w-[20%] flex flex-col gap-3 md:h-[70%]">
              <div className="democ text-2xl font-extrabold">Support</div>
              {/* <div className="demo text-lg font-bold">Subscribe</div> */}
              {/* <div className="demo flex flex-col gap-2"> */}
              <p className='text-sm'>Help & Support</p>
              <p className='text-sm'>Term & Condition</p>
              <p className='text-sm'>Privacy Policy</p>
              <p className='text-sm'>Help</p>
              <p className='text-sm'>Demo _1</p>
              <p className='text-sm'>Demo _2</p>
              {/* </div> */}
            </div>
            {/*  */}
            <div className="demo md:w-[40%] flex flex-col gap-3 md:h-[70%]">
              <div className="democ text-2xl font-extrabold">NewsLetter</div>
              <div className='flex max-md:flex-col max-md:gap-3 md:justify-between'>
                <input type="text" className='md:w-[75%] px-2 border max-md:h-[6vh] text-sm rounded-lg placeholder:text-slate-600' placeholder='Your email' />
                <button className='md:w-[23%] p-2 bg-[#029FAE] text-white text-sm rounded-lg font-semibold'>Subscribe</button>
              </div>
              <p className='text-[10px] pr-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quod omnis consequuntur ullam reprehenderit dicta cumque doloremque repellendus obcaecati voluptate.</p>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/*  */}
        <div className='border-t md:h-[10vh] max-md:py-3 border-t-slate-500'>
          <div className='w-[80vw] gap-2 text-[10px] h-full m-auto flex justify-between items-center'>
            <div className="d flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copyright"><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></svg>
              Copyright Rimel 2022. All right reserved</div>
            <div className="d flex gap-2 text-sm items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bitcoin"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" /></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer