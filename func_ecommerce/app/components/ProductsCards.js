import React from 'react'
import Link from 'next/link';

const ProductsCards = (props) => {
    const imageUrl = props.img ? props.img : '/img.png'; // Default fallback image URL

    return (
        <>
                <div className='flex flex-col gap-2 w-[23%] max-md:w-full rounded-xl min-h-12'>
                    <div
                        className="demo h-72 flex justify-center rounded-xl bg-contain bg-no-repeat bg-center relative"
                        style={{ backgroundImage: `url("${imageUrl}")` }} // Using inline style for background image
                    >
                        {/* The img tag is not needed since we're using the background-image */}
                    </div>
                    <div className="demo text-sm font-extrabold">
                        {props.name ? props.name : 'Breed Dry Dog Food'}
                    </div>
                    <div className="demo text-sm items-center flex gap-2">
                        <div className="demo">{props.price ? props.price : '100$'}</div>
                        <div className="demo flex gap-[1px] items-center">
                            {/* Star icons */}
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="#fbff00"
                                    stroke="currentColor"
                                    strokeWidth="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-star"
                                >
                                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                </svg>
                            ))}
                        </div>
                        <div className="demo">
                            {props.review ? `(${props.review})` : '(35)'}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProductsCards;