import { Suspense, useState } from 'react';
import './App.css';
import DaisyNav from './Components/DaisyNav/DaisyNav';
import Navbar from './Components/DaisyNav/Navbar';
import PriceOption from './Components/PriceOption/PriceOption';
import ResultChart from './ResultChart/ResultChart';
import MarksChart from './Components/MarksChart/MarksChart';
import axios from 'axios';





function App() {
  const pricePromise = fetch('gymData.json').then(res => res.json());

  const marksPromise = axios.get ('marksData.json');
   

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
          <PriceOption pricePromise={pricePromise}></PriceOption>
        </Suspense>

        <ResultChart></ResultChart>
        <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>


    </>
  )
}

export default App
