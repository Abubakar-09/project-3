import React from 'react'


const HeroSection = () => {
    return (
        <>
            <div className='md:w-[80vw] justify-between px-6 max-md:gap-10 max-md:py-8 md:px-12 bg-[#F0F2F3] rounded-b-2xl items-center flex 2xl:h-[40vh] md:h-[70vh] max-md:flex-col overflow-hidden w-[100vw] m-auto'>
                <div className="demo flex flex-col gap-5">
                    <div className="demo text-sm max-md:text-[10px] text-slate-500">Welcome to Chairy</div>
                    <div className="demo text-3xl md:text-6xl font-bold">
                    Best Furniture <br /> Collection for your <br /> interior.
                    </div>
                    <div className="demo w-[40vw] max-md:text-sm md:w-[15vw] p-2 rounded-lg text-white font-semibold bg-[#029FAE]">Show Now</div>
                </div>
                <div className="demo">
                    <img src="/mainimg.png" className='w-[60vw] md:w-[20vw] pb-7' alt="mainimg" />
                </div>
            </div>
        </>
    )
}

export default HeroSection