import React from 'react'

const AboutMain = () => {
    return (
        <>
            <div className="d w-[80vw] max-md:flex-col md:h-[60vh] flex gap-4 m-auto max-md:w-[90vw]">
                <div className="d w-[100%] flex flex-col h-[60vh] gap-5 md:w-[50%] text-white bg-[#007580] rounded-lg p-5">
                    <div className='font-bold text-3xl'>About Us - Comforty</div>
                    <div className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea obcaecati error dolore sapiente possimus iusto, sequi voluptatibus, recusandae quaerat repellat! Cum iusto aperiam perferendis porro eos corrupti doloremque quas aliquid dolorem quisquam! Error velit tempora expedita minima nisi non.</div>
                </div>
                <div className="d w-[100%] md:w-[50%] h-[60vh] bg-[url('/product_1.png')] bg-no-repeat bg-cover rounded-lg bg-center">
                </div>
            </div>
        </>
    )
}

export default AboutMain