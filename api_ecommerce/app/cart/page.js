'use client'
import { useEffect, useState } from "react"

const Page = () => {
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)

    // Fetch cart data
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("/api/cart")
                let data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error("Failed to fetch cart data:", error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const calculatedTotal = products.reduce((acc, e) => acc + (e.price || 0), 0)
        setTotal(calculatedTotal)
    }, [products])

    const handleRemove = async (e) => {
        let response = await fetch("/api/cart", {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(e)
        })
        let b = await response.json()
        setProducts(b.data)
    }

    return (
        <>
            <div className="w-[90vw] m-auto flex flex-col gap-3">
                {products.length > 0 ? (
                    <>
                        {products.map((e, index) => (
                            <div
                                key={index}
                                className="border-b-[1px] flex gap-2 py-3 items-center justify-between text-black text-sm border-b-black"
                            >
                                <div className="flex flex-col">
                                    <p>Item: {e.name}</p>
                                    <p>Price: {e.price}</p>
                                </div>
                                <button className="p-2 border-[1px] border-black rounded text-sm" onClick={() => { handleRemove(e) }}>Remove</button>
                            </div>
                        ))}
                        <div className="mt-4 font-bold text-lg">Total: {total}</div>
                    </>
                ) : (
                    <>No items...</>
                )}
            </div>
        </>
    )
}

export default Page
