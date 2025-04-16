import React from 'react';
import Feature from '../Feature/Feature';

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className='border bg-violet-900 p-5 rounded-2xl mt-2 mb-10'>
      <div>
        <h1 className='text-3xl mb-2'>{name}</h1>
        <h3 className='text-2xl mb-3'>{price}</h3> 
      </div>
      <div className='bg-violet-700 p-4 rounded-2xl mt-10 flex-1'>
        <p className='mb-2'>{description}</p>
        {
          features.map((feat) => <Feature feat={feat}></Feature>)
        }
      </div>
      <button className="btn w-full bg-amber-600 mt-5">SubsCribe</button>
    </div>
  );
};

export default PricingCard;