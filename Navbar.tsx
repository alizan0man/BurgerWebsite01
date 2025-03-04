import { relative } from 'path';
import React from 'react'
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";





export  default function Navbar() {
  return (
    <div> 
     <div className='grid xl:grid-cols-1 grid-cols-1'>
      <div className='p-5'>
       <div className='py-3 px-3 rounded-xl border w-full bg-gradient from-black to-grey-900'>
         <div className='flex justify-center items-center'>
           <div className='flex justify-items-center items-center gap-2'>
{/* burger logo*/} 
<FaHamburger className='w-6 h-6 text-yellow-400 hover:text-cyan-300'/>

{/* search  icon*/} 
<div style={{position : 'relative'}}>
    <input className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block " placeholder="serach menu"/>

    <FaSearch  className=' w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block'/>
  </div>
</div>

<div className=' flex justify-center items-center gap-2 '>

<FaBolt className='w-5 h-5 text-amber-400 hidden lg:block md:block' />
<p className='text-sm text-white hidden lg:block md:block'>Order Now And Get It with
    <span className='text-amber-400'>15 min!</span>
</p>


{/* cart icon*/}
<FaCartShopping className='w-8 h-8 text-sky-400 rounded-full ring-2 p-1 relative hover:text-amber-400'/>
<img
className="inline-block w-8 h-8 rounded-full ring-2 ring-sky-400 hover: text-amber-400"
src='https://img.freepik.com/premium-vector/circular-gray-user-icon-dark-gray-silhouette-inside-lighter-circle-simple-minimal-design_213497-5014.jpg?ga=GA1.2.2082299742.1716266388&semt=ais_hybrid'
alt='use avatar'
/>
        </div>
      </div>
     </div>
    </div>
  </div>
</div>
  );
}
