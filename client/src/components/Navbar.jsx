import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import BuyCredit from '../pages/BuyCredit';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const {user, setShowLogin} = useContext(AppContext)
    
    const navigate = useNavigate()
  return (
    <div className='flex item-centre justify-between py-4'>
      <Link to = '/'>
      <img src = {assets.DreamGlyph_Logo} alt= "" className = 'w-32 sm:w-40 lg:w-52'/>
      </Link>

      <div>
        {user ?
        <div className='flex item-center gap-2 sm: gap-3'>
            <button onClick = {()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 
            rounded-full hover:scale-105 transition-all duration-700'>
                <img className='w-5' src = {assets.credit_star} alt=''/>
                <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left : 50</p>
            </button>
            <p className='text-gray-600 max-sm:hidden pl-4 pt-2'> Hi, GreatStack</p>
            
            <div className='relative group'>
                <img src = {assets.profile_icon} className='w-10 drops-shadow' alt=''/>
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                    <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                        <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
        :
        <div className='flex item-centre gap-4 sm:7'>
            <p onClick={()=>navigate('/buy')} className='cursor-pointer text-lg'>Pricing</p>
            <button onClick={()=> setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-1 sm:px-10 text-lg rounded-full'>Login</button>
        </div>
        }
      </div>
    </div>
    
  )
}

export default Navbar
