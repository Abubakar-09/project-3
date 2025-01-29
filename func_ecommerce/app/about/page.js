import React from 'react'
import AboutMain from '../components/AboutMain'
import AboutChoice from '../components/AboutChoice'
import FeaturedProducts from '../components/FeaturedProducts'

const page = () => {
    return (
        <>
            <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
            <AboutMain />
            <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
            <AboutChoice />
            <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
            <FeaturedProducts />
            <div className="demo my-5 w-[80vw] m-auto max-md:w-[90vw] h-[1px]"></div>
        </>
    )
}

export default page