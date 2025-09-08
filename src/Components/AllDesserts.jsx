import React from "react";
import desserts from "../../data";
import SingleDessert from "../Components/SingleDessert";
import CartContext from "../Context/CartContext";

export default function AllDesserts() {
  return (
    <div className="lg:grid grid-cols-3 gap-6 p-3 justify-center">
      {desserts.map((dessert) => {
        const inCart = desserts.some((cartItem) => cartItem.id === dessert.id);
        return <SingleDessert key={dessert.id} {...dessert} inCart={inCart} />;
      })}
    </div>
  );
}
