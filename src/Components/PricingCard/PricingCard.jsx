import React from 'react';
import Feature from '../Feature/Feature';

const PricingCard = ({pricing}) => {
  const {name, duration, price,description, features}= pricing;
  return (
    <div className='border bg-green-600 p-5 rounded-2xl mt-2'>
        <h1 className='text-3xl mb-2'>{name}</h1>
        <h3 className='text-2xl mb-3'>{price}</h3>
        <h4 className='text-xl mb-3'>{duration}</h4>
        <p className='mb-2'>{description}</p>
        {
           features.map((feat) => <Feature feat={feat}></Feature> )
        }

    </div>
  );
};

export default PricingCard;