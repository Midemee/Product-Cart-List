// import React, { useState, useContext} from 'react';
// import  desserts  from '../../data';
// import { MdAddShoppingCart } from 'react-icons/md';
// import { toast } from 'react-toastify';
// import { CiCircleMinus } from "react-icons/ci";
// import { CiCirclePlus } from "react-icons/ci";
// import {CartContext} from "../../Context/CartContext"

// export default function SingleDessert({ id, img, title, description, price }) {
//   const {cart, handleAddToCart, handleQuantityIncrease, handleQuantityDecrease} = useContext (CartContext);

//   const itemInCart = cart.find((cartItem) => cartItem.id === id);
//   const isInCart = !!itemInCart;
//   const itemQuantity = itemInCart?.quantity || 0;

//   return (
//     <div className=''>
//       <img className='rounded-lg relative w-[50px[' src={img} alt={title} />
//       <div className='relative left-25 lg:left-30 rounded-4xl w-[150px] flex justify-center items-center gap-1 h-[35px] mt-[-20px]'>
//         {isInCart ? (
//           <div className='bg-orange-700 w-[150px] h-[35px] rounded-4xl flex items-center justify-center gap-8'>
//             <button onClick={() => handleQuantityDecrease(itemInCart)}><CiCircleMinus /></button>
//             <span>{itemQuantity}</span>
//             <button onClick={() => handleQuantityIncrease(itemInCart)}><CiCirclePlus /></button>
//           </div>
//         ) : (
//           <button className='border rounded-4xl w-[150px] h-[35px] flex justify-center items-center gap-1 bg-white  '
//             onClick={() =>
//               handleAddToCart({ id, img, title, description, price })
//             }><span className='text-orange-700'><MdAddShoppingCart /></span> Add to Cart
//           </button>
//         )}
//       </div>
//       <p className='text-sm opacity-[0.5]'>{title}</p>
//       <h1 className='font-bold'>{description}</h1>
//       <p className='text-orange-700'>${price}</p>
//     </div>
//   );
// }

import React, { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { CartContext } from "../Context/CartContext";

export default function SingleDessert({ id, img, title, description, price }) {
  const {
    cart,
    handleAddToCart,
    handleQuantityIncrease,
    handleQuantityDecrease,
  } = useContext(CartContext);

  const itemInCart = cart.find((item) => item.id === id);
  const quantity = itemInCart?.quantity || 0;

  return (
    <div className="p-5">
      <div className="relative inline-block">
        {itemInCart ? (
          <img
            className="rounded-lg w-full lg:w-[250px] border-2 text-orange-700"
            src={img}
            alt={title}
          />
        ) : (
          <img
            className="rounded-lg w-full lg:w-[250px]"
            src={img}
            alt={title}
          />
        )}

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[150px]">
          {itemInCart ? (
            <div className="flex items-center justify-between gap-2 border rounded-3xl py-2 px-4 text-lg bg-orange-700 text-white shadow-lg">
              <button onClick={() => handleQuantityDecrease(itemInCart)}>
                <CiCircleMinus size={20} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityIncrease(itemInCart)}>
                <CiCirclePlus size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                handleAddToCart({ id, img, title, description, price })
              }
              className="flex items-center gap-2 border px-5 rounded-3xl h-[40px] bg-white shadow-lg"
            >
              <span className="text-orange-700">
                <MdAddShoppingCart />
              </span>
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <h2 className="mt-8 text-gray-600 text-xl">{title}</h2>
      <p className="text-xl text-dark font-semibold">{description}</p>
      <p className="text-2xl">${price.toFixed(2)}</p>
    </div>
  );
}
