import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <Link href={'/'}>
                <div className='w-screen h-[20vh] flex justify-center items-center font-extrabold text-3xl'>
                    BlogPost
                </div>
            </Link>
        </>
    )
}

export default Navbar