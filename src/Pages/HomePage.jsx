import React from 'react';
import Header from "../Components/Header";
import AllDesserts from "../Components/AllDesserts";
import Cart from "../Components/Cart"


export default function HomePage() {
  return (
    <div className=''>
        <Header/>
        <main className='flex flex-col lg:flex-row justify-between'>
          <AllDesserts/>
          <div>
          <Cart />
          </div>
        </main>
    </div>
  );
}
