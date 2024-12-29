'use client'
import Link from 'next/link'

const Navbar = () => {
 
    return (
        <>
            <div className='w-[90vw] m-auto min-h-[10vh] flex justify-between items-center'>
                <Link href={'/'}><p className='font-extrabold'>Ecommerce_web</p></Link>
                <Link href={'/cart'}>
                    <button className='border-[1px] border-black p-2 rounded flex gap-2 justify-center items-center'>
                        Cart
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Navbar

