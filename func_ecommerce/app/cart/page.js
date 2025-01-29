'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const page = () => {
    const [items, setitems] = useState([])
    const [data, setdata] = useState(0)
    const router  = useRouter()

    useEffect(() => {
        const data = async () => {
            let res = await (await fetch('/api/cart', {
                cache: 'no-store'
            })).json()
            setitems(res)
        }
        data()
    }, [data])

    const HandleRemoveFromCart = async (e) => {
        let a = await fetch('/api/cart', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        })
        router.refresh()
        setdata(1)
    }


    return (
        <>
            <div className='w-[80vw] m-auto py-5 max-md:w-[90vw]'>
                <div className="">
                    <h2 className='text-2xl font-semibold'>Items In the Cart</h2>
                    <div className='h-[70vh] overflow-y-scroll overflow-x-hidden'>
                        {
                            items.map((e, index) => {
                                return (<>
                                    <div className="md:h-[20%] text-sm flex max-md:flex-col max-md:gap-3 max-md:my-6 my-3 justify-between items-center" key={index}>
                                        <div className=" w-[13vw] max-md:w-[25vw] relative h-full">
                                            <img src={`${e.img}`} className='w-full h-full object-contain' alt="product_img" />
                                        </div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="">{e.name}</p>
                                            <p className="">{e.price}</p>
                                        </div>
                                        <div  onClick={()=>HandleRemoveFromCart(e)} className="p-2 border-[1px] max-md:w-full text-center cursor-pointer rounded-lg border-black">Remove Item</div>
                                    </div>
                                </>)
                            })
                        }
                    </div>
                    <Link href={'/checkout'}>
                    <div className="p-2 w-full cursor-pointer text-center border-[1px] border-black text-sm">
                        Proceed to the next Step
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default page