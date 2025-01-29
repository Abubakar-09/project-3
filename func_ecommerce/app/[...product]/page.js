'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import FeaturedProducts from '../components/FeaturedProducts'

const page = (props) => {
    const [param, setparam] = useState(props.params.product)
    const [type, settype] = useState(param[0])
    const [name, setname] = useState(param[1])
    // product 
    const [product, setProduct] = useState({})
    const router = useRouter()
    //daata useless
    const [data, setdata] = useState([])


    //fecthing all products
    useEffect(() => {
        const getData = async () => {
            let response = await fetch("/api/products", {
                cache: 'no-store'
            });
            let data = await response.json();

            // Filter products by type
            const filteredProducts = data.filter(item => item.type === type);

            // Find the specific product by name
            const singleProduct = filteredProducts.find(item => item.name === name);

            setProduct(singleProduct || null); // Set null if no product is found
        };

        getData();
    }, [type, name, data]);

    const handleWishlist = async (e) => {
        if (e.wishlist) {
            const res = await fetch('/api/wishlist', {
                cache: 'no-store',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e)
            });
            const b = await res.json()
            router.refresh()
            setdata(b)
        } else {
            const res = await fetch('/api/wishlist', {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(e)
            });
            const b = await res.json()
            router.refresh()
            setdata(b)
        }
    }

    const handleAddToCart = async (e) => {
        let a = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(e)
        })
        router.refresh()
    }

    return (
        <>
            <div className='w-[80vw] max-md:w-[90vw] m-auto md:h-[80vh] flex max-md:flex-col max-md:gap-7 justify-center items-center py-9'>
                <div className="w-full flex justify-center items-center h-full">
                    <img src={`${product.img}`} alt="product_img" className="w-full h-full object-contain" />
                </div>
                <div className="w-full flex justify-around flex-col items-center h-auto md:h-[70%] 2xl:h-[60%] max-md:gap-9 py-6">
                    <div className="w-[80%] font-semibold">{product.name}</div>
                    <div className="w-[80%]">{product.desc}</div>
                    <div className="flex gap-3 justify-between w-[80%]"><span>Price: ${product.price}</span>Stock Left: {product.stock}</div>
                    {product.stock > 0 ? <div onClick={() => { handleAddToCart(product) }} className="w-[80%] cursor-pointer border-[1px] hover:scale-125 border-black p-2 flex justify-center items-center ">Buy It</div> : <div className="w-[80%] cursor-pointer border-[1px] border-black p-2 flex justify-center items-center ">Out Of Stock</div>}
                    <div onClick={() => { handleWishlist(product) }} className="w-[80%] cursor-pointer border-[1px] hover:scale-125 border-black p-2 flex justify-center items-center ">{product.wishlist ? 'Remove From Wishlist' : 'Add To Wishlist'}</div>
                </div>
            </div>
            <FeaturedProducts />
        </>
    )
}

export default page
