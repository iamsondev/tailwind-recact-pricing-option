import { Check } from 'lucide-react';
import React from 'react';

const Feature = ({feat}) => {
  return (
    <div>
         <p className='flex gap-3'>
            <Check></Check> {feat} 
         </p>
    </div>
  );
};

export default Feature;