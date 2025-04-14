import React from 'react';

const Link = ({route}) => {
  return (
    <div>
         <li className='mr-10 text-white p-2 hover:bg-amber-700'>
              <a href={route.path}>{route.name}</a>
         </li>
    </div>
  );
};

export default Link;