'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [shippingMethod, setShippingMethod] = useState('');
    const [cartTotal, setCartTotal] = useState(0); // Example cart total
    const [form_data, setform_data] = useState({
        name:'',
        phone:'',
        address:''
    })
    const router = useRouter()

    const shippingCost = shippingMethod === 'fast' ? 300 : 100;
    const total = cartTotal + shippingCost;

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            name: `${form_data.name}`,
            phone: `${form_data.phone}`,
            address: `${form_data.address}`,
            shipping:0
        }
        obj.shipping = shippingCost 
        let  res = await fetch('/api/order', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(obj)
        })
        router.push('/order')
    };

    useEffect(() => {
        const fetchCartItems = async () => {
                const response = await fetch('/api/cart'); // Fixed typo
                const data = await response.json();
                // Calculate cart total
                const totalPrice = data.reduce((sum, item) => sum + item.price,0);
                setCartTotal(totalPrice);
        };
        fetchCartItems();
    }, []);

    const handleChange = (e)=>{
        setform_data({...form_data, [e.target.name]:[e.target.value]})
    }

    return (
        <>
            <div className="w-[80vw] m-auto max-md:w-[90vw] min-h-screen">
                <div className="py-10">
                    <h2 className="text-2xl font-semibold py-4">Form</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name='name'
                            className="border-[1px] border-black p-2 rounded-lg md:w-[40vw] placeholder:text-stone-600 placeholder:text-sm"
                            value={form_data.name}
                            onChange={(e)=>{handleChange(e)}}
                            placeholder="Enter Your Name"
                        />
                        <input
                            type="text"
                            name='phone'
                            className="border-[1px] border-black p-2 rounded-lg md:w-[40vw] placeholder:text-stone-600 placeholder:text-sm"
                            value={form_data.phone}
                            onChange={(e)=>{handleChange(e)}}
                            placeholder="Enter Your Phone Number"
                        />
                        <input
                            type="text"
                            name='address'
                            className="border-[1px] border-black p-2 rounded-lg md:w-[40vw] placeholder:text-stone-600 placeholder:text-sm"
                            value={form_data.address}
                            onChange={(e)=>{handleChange(e)}}
                            placeholder="Enter Your Address"
                        />
                        <input
                            type="text"
                            value={shippingMethod}
                            onChange={(e) => setShippingMethod(e.target.value)}
                            className="border-[1px] border-black p-2 rounded-lg md:w-[40vw] placeholder:text-stone-600 placeholder:text-sm"
                            placeholder="Shipping Method (standard/fast) in small letters"
                        />
                        <button type="submit" className="md:w-[40vw] p-2 border-[1px] border-black rounded-lg">
                            Submit Form
                        </button>
                    </form>
                </div>
                <div className="">
                    <h3 className="text-2xl font-semibold py-4">SubTotal</h3>
                    <p className="">Cart Item Total: {cartTotal}/- PKR</p>
                    <p className="">Shipping: {shippingCost}/- PKR</p>
                    <p className="">Total: {total}/- PKR</p>
                </div>
            </div>
        </>
    );
};

export default Page;
