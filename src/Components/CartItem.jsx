import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function CartItem({ id, description, price, quantity }) {
  const { removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <div className="py-4 flex flex-row items-center justify-between border-b ">
        <div className="flex flex-col">
          <p className="font-semibold text-md">{description}</p>
          <div className="flex items-center gap-3 pt-2">
            <span className="font-bold text-rose-950">{quantity}x</span>
            <div className="flex gap-3">
              <p>@ ${price}</p>
              <p className="font-semibold">@ ${price * quantity}</p>
            </div>
          </div>
        </div>
        <button onClick={() => removeItemFromCart({ id, description, price })}>
          <span className="text-rose-900">
            <IoCloseCircleOutline size={23} />
          </span>
        </button>
      </div>
    </div>
  );
}

// import React from 'react'
// import SingleDessert from '../Components/SingleDessert';
// import desserts from "../../data"
// import { useState } from 'react';
// import { CiCircleRemove } from "react-icons/ci";

// export default function CartItem(id, img, title, description, price, quantity ) {
//   const calculateTotal = (desserts) =>
//   desserts.reduce((sum, dessert) => sum + dessert.price * dessert.quantity, 0).toFixed(2);
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm ">
//       <h1 className="text-xl font-bold text-orange-700 mb-4">Your Cart (7)</h1>
//       <div className="space-y-4 mb-6">
//         {desserts.map ((dessert)=>{
//           return <div key={dessert.id} className="flex justify-between items-start border-b">
//             <div>
//               <h2 className='className="text-sm font-semibold"'>{dessert.title} </h2>
//               <div className="text-xs text-gray-500">
//                 <span className="text-orange-600 font-semibold">{dessert.quantity}x </span>
//                 <span>@ ${dessert.price.toFixed(2)} </span>
//                 <span className="ml-1">${}  </span>
//               </div>
//             </div>
//             <button className="text-gray-400 hover:text-red-600 transition"><CiCircleRemove /></button>
//           </div>
//         })}
//       </div>
//       <div className="flex justify-between font-bold text-lg mb-4">
//         <span>Order Total</span>
//         <span>${calculateTotal}</span>
//       </div>
//       <div className="text-sm bg-gray-100 rounded-md p-3 flex justify-center gap-2 text-gray-600 mb-4">
//         <p>This is a <span className="font-semibold">Carbon-neutral </span>delivery</p>
//       </div>

//       <button className="bg-orange-700 hover:bg-orange-800 text-white w-full py-3 rounded-full font-semibold">Confirm Order</button>

//     </div>
//   )
// }
