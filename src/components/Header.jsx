import React from 'react'
import {MdOutlineFlightTakeoff} from 'react-icons/md';
import {BiSolidOffer, BiSupport} from 'react-icons/bi';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
   <div className="header-container flex flex-row items-center justify-between py-8 px-8 bg-gradient-to-tr bg-sky-100" style={{
    fontFamily: "'Roboto', sans-serif",
   }}>
    <div className="elements flex flex-row items-center gap-10">
        <div className="brand">
            <h3 className='text-2xl font-bold '>SkyScrapper </h3>
        </div>
        <div className="links flex flex-row items-center gap-10 mx-[80px]">
            <Link to='/search' className='flex flex-row items-center gap-[8px] hover:text-indigo-400 transition ease-in text-xl border-l-4 border-r-4 rounded-xl px-4 border-violet-300'>flights
            <MdOutlineFlightTakeoff /></Link>
            <Link to='/' className='flex flex-row items-center gap-[8px] hover:text-indigo-400 transition ease-in text-xl border-l-4 border-r-4 rounded-xl px-4 border-violet-300'>offers
            <BiSolidOffer /></Link>
            <Link to='/' className='flex flex-row items-center gap-[8px] hover:text-indigo-400 transition ease-in text-xl border-l-4 border-r-4 rounded-xl px-4 border-violet-300'>support
            <BiSupport /></Link>
            
        </div>
    </div>
    <div className="accounts flex flex-row items-center gap-10">
        <button className=' accounts-login hover:text-indigo-400 transition ease-in text-xl border-l-4 px-4 border-r-4 rounded-xl hover:border-violet-300 '>Log in</button>
        <button className='accounts-reserver border-2 border-violet-300 rounded-2xl py-2 px-6 text-lg hover:bg-violet-300 transition ease-in shadow-2xl'>Reserve</button>
    </div>
   </div>
  )
}
