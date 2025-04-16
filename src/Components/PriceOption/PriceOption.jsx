import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PriceOption = ({ pricePromise }) => {
  const pricingData = use(pricePromise);
  console.log(pricingData)
  return (
    <div>
      <h1 className='text-5xl mt-10 m-5 '>Get your Plan</h1>
      <div className='grid grid-cols-3 gap-2'>
        {
          pricingData.map((pricing, index) => <PricingCard 
          key={index} 
          pricing={pricing}>

          </PricingCard>)
        }
      </div>

    </div>
  );
};

export default PriceOption;