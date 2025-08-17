import React from 'react'
import SingleDessert from '../Components/SingleDessert';
import desserts from "../../data"
import { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";


export default function CartItem(id, img, title, description, price ) {
  const calculateTotal = (desserts) =>
  desserts.reduce((sum, dessert) => sum + dessert.price * dessert.quantity, 0).toFixed(2);
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm ">
      <h1 className="text-xl font-bold text-orange-700 mb-4">Your Cart (7)</h1>
      <div className="space-y-4 mb-6">
        {desserts.map ((dessert)=>{
          return <div key={dessert.id} className="flex justify-between items-start border-b">
            <div>
              <h2 className='className="text-sm font-semibold"'>{dessert.title} </h2>
              <div className="text-xs text-gray-500">
                <span className="text-orange-600 font-semibold">{dessert.quantity}x </span>
                <span>@ ${dessert.price.toFixed(2)} </span>
                <span className="ml-1">${}  </span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-600 transition"><CiCircleRemove /></button>
          </div>
        })}
      </div>
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Order Total</span>
        <span>${calculateTotal}</span>
      </div>
      <div className="text-sm bg-gray-100 rounded-md p-3 flex justify-center gap-2 text-gray-600 mb-4">
        <p>This is a <span className="font-semibold">Carbon-neutral </span>delivery</p>
      </div>

      <button className="bg-orange-700 hover:bg-orange-800 text-white w-full py-3 rounded-full font-semibold">Confirm Order</button>
      


    </div>
  )
}



// const initialCartItems = [
//   { id: 1, title: 'Classic Tiramisu', price: 5.50, quantity: 1 },
//   { id: 2, title: 'Vanilla Bean Crème Brûlée', price: 7.00, quantity: 4 },
//   { id: 3, title: 'Vanilla Panna Cotta', price: 6.50, quantity: 2 },
// ];

// export default function CartPanel({ initialItems = initialCartItems }) {
//   const [cartItems, setCartItems] = useState(initialItems);

//   const removeItem = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const calculateTotal = () =>
//     cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

//   const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mx-auto">
//       <h2 className="text-xl font-bold text-orange-700 mb-4">
//         Your Cart ({itemCount})
//       </h2>

//       <div className="space-y-4 mb-6">
//         {cartItems.length === 0 ? (
//           <p className="text-gray-500 text-sm text-center">Your cart is empty.</p>
//         ) : (
//           cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm font-semibold">{item.title}</p>
//                 <div className="text-xs text-gray-500">
//                   <span className="text-orange-600 font-semibold">{item.quantity}x</span>
//                   <span> @ ${item.price.toFixed(2)}</span>
//                   <span className="ml-1">= ${(item.quantity * item.price).toFixed(2)}</span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="text-gray-400 hover:text-red-600 transition text-lg"
//               >
//                 &times;
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {cartItems.length > 0 && (
//         <>
//           <div className="flex justify-between font-bold text-lg mb-4">
//             <span>Order Total</span>
//             <span>${calculateTotal()}</span>
//           </div>

//           <div className="text-sm bg-gray-100 rounded-md p-3 flex items-center gap-2 text-gray-600 mb-4">
//             <span className="text-green-600 text-xl">🌱</span>
//             <span>
//               This is a <strong className="font-semibold">carbon-neutral</strong> delivery
//             </span>
//           </div>

//           <button className="bg-orange-700 hover:bg-orange-800 text-white w-full py-3 rounded-full font-semibold">
//             Confirm Order
//           </button>
//         </>
//       )}
//     </div>
//   );
// }