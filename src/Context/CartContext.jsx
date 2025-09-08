import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const getCartFromStorage = JSON.parse(localStorage.getItem("cart")) || [];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


       const handleAddToCart = (selectedItem) => {
        const exists = cart.find((cartItem) => cartItem.id === selectedItem.id);
        if (exists) {
          toast.info(`${selectedItem.title} is already in the cart`);
        } else {
          setCart([...cart, { ...selectedItem, quantity: 1 }]);
          toast.success(`${selectedItem.title} added to cart`);
        }
      };

        const handleQuantityIncrease = (selectedItem) => {
          const item = cart.find((cartItem) => cartItem.id === selectedItem.id);
          if (item) {
            const updatedCart = cart.map((cartItem) =>
              cartItem.id === selectedItem.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
            setCart(updatedCart);
            toast.success(`Increased quantity of ${selectedItem.title}`);
          } else {
            setCart([...cart, { ...selectedItem, quantity: 1 }]);
            toast.success(`${selectedItem.title} added to cart`);
          }
        };
      
        const handleQuantityDecrease = (selectedItem) => {
          const item = cart.find((cartItem) => cartItem.id === selectedItem.id);
          if (item) {
            if (item.quantity > 1) {
              const updatedCart = cart.map((cartItem) =>
                cartItem.id === selectedItem.id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              );
              setCart(updatedCart);
              toast.warn(`Quantity of ${selectedItem.title} decreased`);
            } else {
              const updatedCart = cart.filter((cartItem) => cartItem.id !== selectedItem.id);
              setCart(updatedCart);
              toast.warn(`${selectedItem.title} removed from cart`);
            }
          } else {
            toast.error(`${selectedItem.title} not found in cart`);
          }
        };
  
  const removeItemFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    toast.error(`${item.title} removed from cart`);
  };

  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  const totalItems= cart.reduce((total,cartItem)=>{
    return total + cartItem.quantity
  },0);
  const [showModal, setShowModal] = useState(false);

  const confirmOrder = () => {
    setShowModal(true);
  };

  const startNewOrder = () => {
    setCart([]);
    setShowModal(false);
  };

      return(
        <CartContext.Provider value ={{cart, handleAddToCart, handleQuantityIncrease, handleQuantityDecrease, removeItemFromCart, totalPrice, totalItems, showModal, setShowModal, confirmOrder, startNewOrder}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;








// import  {createContext, useEffect, useState} from "react"
// import  {toast} from "react-toastify"

// export const CartContext = createContext();

// const  getCartFromStorage = JSON.parse(localStorage.getItem ("Cart")) || [];
// const CartProvider = ({children})=> {
//         const [cart, setCart] = useState (getCartFromStorage);
//     useEffect (()=> {
//         localStorage.setItem ("cart", JSON.stringify(cart));
//     },[cart]);


//      const handleAddToCart = (selectedItem) => {
//         const exists = cart.find((cartItem) => cartItem.id === selectedItem.id);
//         if (exists) {
//           toast.info(`${selectedItem.title} is already in the cart`);
//         } else {
//           setCart([...cart, { ...selectedItem, quantity: 1 }]);
//           toast.success(`${selectedItem.title} added to cart`);
//         }
//       };

//         const handleQuantityIncrease = (selectedItem) => {
//           const item = cart.find((cartItem) => cartItem.id === selectedItem.id);
//           if (item) {
//             const updatedCart = cart.map((cartItem) =>
//               cartItem.id === selectedItem.id
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                 : cartItem
//             );
//             setCart(updatedCart);
//             toast.success(`Increased quantity of ${selectedItem.title}`);
//           } else {
//             setCart([...cart, { ...selectedItem, quantity: 1 }]);
//             toast.success(`${selectedItem.title} added to cart`);
//           }
//         };
      
//         const handleQuantityDecrease = (selectedItem) => {
//           const item = cart.find((cartItem) => cartItem.id === selectedItem.id);
//           if (item) {
//             if (item.quantity > 1) {
//               const updatedCart = cart.map((cartItem) =>
//                 cartItem.id === selectedItem.id
//                   ? { ...cartItem, quantity: cartItem.quantity - 1 }
//                   : cartItem
//               );
//               setCart(updatedCart);
//               toast.warn(`Quantity of ${selectedItem.title} decreased`);
//             } else {
//               const updatedCart = cart.filter((cartItem) => cartItem.id !== selectedItem.id);
//               setCart(updatedCart);
//               toast.warn(`${selectedItem.title} removed from cart`);
//             }
//           } else {
//             toast.error(`${selectedItem.title} not found in cart`);
//           }
//         };

//         const removeItemFromCart = (item)=> {
//           const updatedCart = cart.filter ((cartItem)=>
//           cartItem.id !== item.id);
//           setCart (updatedCart);
//           toast.error (`${item.title} removed from cart`)

//           const totalPrice = cart.reduce ((total, cartItem)=>
//           {
//             return total + cartItem.price * cartItem.quantity;
//           }, 0); 
//           // const totalItem
//         }


//     return(
//         <CartContext.Provider value ={{cart, setCart, handleAddToCart, handleQuantityIncrease, handleQuantityDecrease}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartProvider;