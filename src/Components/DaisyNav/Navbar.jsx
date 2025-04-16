import React, { useState } from 'react';
import Link from './Link';
import { CircleX, Menu } from 'lucide-react';


const navigationData = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" }
];

const Navbar = () => {
  
const [open, setOpen] = useState(false);
const links =  navigationData.map(route => <Link key={route.id} route={route}></Link> );
  return (
    <nav className='flex justify-between mx-12 mt-4'>
        <span className='flex' onClick={()=>setOpen(!open)}>
          {open? 
          <CircleX className='md:hidden'></CircleX>: 
          <Menu className='md:hidden'></Menu>}
           <ul className={`md:hidden absolute duration-1000
            ${open? 'top-10' : '-top-70'}
             bg-amber-400`}>
             
                {links}
             </ul> 
        <h3 className='ml-3'>My Navbar</h3></
        span>
          <ul className='md:flex hidden'>
                {
                   links
                }
          </ul>


      {/* <ul className='flex justify-center'>
           {
              navigationData.map(route =><li className='mr-10'><a href={route.path}>{route.name}</a></li> )
           }
      </ul> */}
         {/* <ul className='flex justify-center items-center'>
              <li className='mr-10'><a href=""></a>Home</li>
              <li className='mr-10'><a href=""></a>About</li>
              <li className='mr-10'><a href="">Blog</a>Home</li>
         </ul> */}
         <button>Log in</button>
    </nav>
  );
};

export default Navbar;