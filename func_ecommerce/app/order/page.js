'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const router = useRouter()
    const [data, setdata] = useState([])
    useEffect(() => {
        const handle = async () => {
            let a = await (await fetch('/api/order')).json()
            setdata(a)
        }
        handle();
    }, [])

    useEffect(() => {
      console.log(data)
      router.refresh()
    }, [data])
    


    return (
        <>
            {data && data.length > 0 ? (
                data.map((e) => (
                    <div key={e.id} className="w-[80vw] m-auto py-3 flex flex-col gap-3 max-md:w-[90vw]">
                        <div>Order ID: {e.id}</div>
                        <div>
                            Order Status: 
                            <p className={e.status ? 'text-green-500' : 'text-red-500'}>
                                {e.status ? 'success' : 'failed'}
                            </p>
                        </div>
                        <div className="w-full">
                            <h4>Cart Items</h4>
                            {e.arr.map((e,index)=>(
                                <div key={index} className="w-full flex justify-between">
                                <span>{e.name}</span>
                                <span>Number of products: {e.numberOfElements}</span>
                            </div>
                            ))}
                        </div>
                        <hr />
                    </div>
                ))
            ) : (
                <p className="text-center">..no Items</p>
            )}
        </>
    );
    
}

export default page