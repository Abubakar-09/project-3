'use client'
import React from 'react'

const ProductDetail = ({ img, title, description, price }) => {
  // Fallback for image if none is provided
  const productImage = img ? `${img}.png` : '/product_1.png';

  return (
    <div className="w-[80vw] m-auto max-md:w-[90vw] md:h-[60vh] max-md:flex-col py-16 flex gap-3 md:gap-5">
      {/* Product Image */}
      <div
        className="md:w-[50%] w-full h-[60vh] bg-contain bg-no-repeat bg-center rounded-xl"
        style={{ backgroundImage: `url(${productImage})` }}
        alt={title || "Product image"} // Alt text for accessibility
      >
      </div>

      {/* Product Details */}
      <div className="md:w-[50%] w-full flex flex-col gap-4 md:gap-8  h-[60vh]">
        <div className="test text-4xl font-extrabold">{title || 'Library Stool Chair'}</div>
        <div className="test bg-[#029FAE] text-white font-semibold w-fit rounded-2xl p-3 py-2">{price || '$20 USD'}</div>
        <div className='w-full h-[1px] bg-slate-500'></div>
        <div className="test">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam in ipsam quidem dolorem ipsa repellendus animi, aspernatur a quos sapiente?</div>
        <div className="test bg-[#029FAE] text-white font-semibold w-fit rounded-2xl p-3 py-2">{'Add TO Cart'}</div>
      </div>
    </div>
  );
}

export default ProductDetail;