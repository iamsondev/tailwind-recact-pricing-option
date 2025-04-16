import { Suspense, useState } from 'react';
import './App.css';
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/DaisyNav/Navbar';
import PriceOption from './Components/PriceOption/PriceOption';



function App() {
  const pricePromise = fetch('gymData.json').then(res=>res.json());

  return (
    <>
     <header>
         <Navbar></Navbar>
     </header>

     <main>
         <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
             <PriceOption pricePromise={pricePromise}></PriceOption>
         </Suspense>
     </main>
   

    </>
  )
}

export default App
