import React from 'react'

const page = () => {
    return (
        <>
            <div className="d py-10 flex flex-col justify-center items-center">
                <div className='w-[80vw] flex gap-2 max-md:w-[90vw] items-center flex-col m-auto py-6'>
                    <div className="demo text-2xl font-bold">Get in touch With us</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, necessitatibus aperiam? Repellendus velit ab saepe?</p>
                </div>
                <div className="form flex flex-col gap-6">
                    <div className="">
                        <p>Name</p>
                        <input type="text" className='px-4 p-2 placeholder:text-slate-600 border border-slate-600 rounded-xl' placeholder="Enter Here!" />
                    </div>
                    <div className="">
                        <p>Email</p>
                        <input type="text" className='px-4 p-2 placeholder:text-slate-600 border border-slate-600 rounded-xl' placeholder="Enter Here!" />
                    </div>
                    <div className="">
                        <p>Subject</p>
                        <input type="text" className='px-4 p-2 placeholder:text-slate-600 border border-slate-600 rounded-xl' placeholder="Enter Here!" />
                    </div>
                    <div className="">
                        <p>Note</p>
                        <input type="text" className='px-4 p-2 placeholder:text-slate-600 border border-slate-600 rounded-xl' placeholder="Enter Here!" />
                    </div>
                    <button className='p-3 px-6 bg-[#029FAE] rounded-xl text-white w-fit'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default page