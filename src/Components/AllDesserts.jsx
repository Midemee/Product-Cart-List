import React from 'react';
import desserts from '../../data';
import SingleDessert from '../Components/SingleDessert';

export default function AllDesserts() {
  return (
    <div className=''>
        <div className="lg:grid grid-cols-3 gap-6 p-3 justify-center">
      {desserts.map((dessert)=>{  
        return <SingleDessert key={dessert.id} {...dessert} />;
      })}
    </div>
    </div>
  )
}
