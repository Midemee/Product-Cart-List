import React, { useState } from 'react';
import  desserts  from '../../data';
import { MdAddShoppingCart } from 'react-icons/md';
import { toast } from 'react-toastify';
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export default function SingleDessert({ id, img, title, description, price }) {
  const [cart, setCart] = useState([]);

  const itemInCart = cart.find((cartItem) => cartItem.id === id);
  const isInCart = !!itemInCart;
  const itemQuantity = itemInCart?.quantity || 0;

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

  return (
    <div className=''>
      <img className='rounded-lg relative w-[50px[' src={img} alt={title} />
      <div className='relative left-25 lg:left-30 rounded-4xl w-[150px] flex justify-center items-center gap-1 h-[35px] mt-[-20px]'>
        {isInCart ? (
          <div className='bg-orange-700 w-[150px] h-[35px] rounded-4xl flex items-center justify-center gap-8'>
            <button onClick={() => handleQuantityDecrease(itemInCart)}><CiCircleMinus /></button>
            <span>{itemQuantity}</span>
            <button onClick={() => handleQuantityIncrease(itemInCart)}><CiCirclePlus /></button>
          </div>
        ) : (
          <button className='border rounded-4xl w-[150px] h-[35px] flex justify-center items-center gap-1 bg-white  '
            onClick={() =>
              handleAddToCart({ id, img, title, description, price })
            }><span className='text-orange-700'><MdAddShoppingCart /></span> Add to Cart
          </button>
        )}
      </div>
      <p className='text-sm opacity-[0.5]'>{title}</p>
      <h1 className='font-bold'>{description}</h1>
      <p className='text-orange-700'>${price}</p>
    </div>
  );
}
