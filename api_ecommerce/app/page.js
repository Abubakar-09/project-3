'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [products, setproducts] = useState([])
  const router = useRouter()

  useEffect(() => {
    const data = async () => {
      let a = await fetch("api/products")
      let b = await a.json()
      setproducts(b)
    }
    data()
  }, [])

  const handleAddToCart = async (e) => {
    let response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(e)
    })
    let b = await response.json()

    router.push('/')
  }

  return (
    <>
      <div className="flex text-black flex-wrap w-[80vw] py-4 max-md:flex-col  m-auto gap-3 min-h-screen justify-center items-center">
        {products.length > 0 ? (
          products.map((e, index) => {
            return (
              <div className="border-[1px] flex text-sm flex-col gap-4 max-md:w-full w-[24%] min-h-[50vh] rounded-lg justify-center  text-black border-black p-2" key={index}>
                <div className="font-bold text-xl">{e.name}</div>
                <div>PKR {e.price}-/</div>
                <div>{e.product_details}</div>
                <div>
                  <button onClick={() => handleAddToCart(e)} className="p-2 border-[1px] border-black rounded">Add to Cart</button>
                </div>
              </div>
            )
          })
        ) : (
          <>...loading</>
        )}
      </div>
    </>
  )
}
