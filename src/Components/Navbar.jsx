import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  bg-[#8ff156e6] p-2 pl-16'>

      <div className='flex'>
        <img src="/curreLogo.png" alt="" className='h-16 w-16' />
        <div >
          <Link to='/' className=' font-bold text-3xl text-white'>Currency<span className=' text-black'>Swap</span></Link>
          <p className='  text-white'>Fast & reliable currency conversion</p>
        </div>
      </div>
      <div className='pr-16  text-[#292927]'>
        <Link to='/login'> <button className=' cursor-pointer px-8 py-2  bg-white mr-1 shadow-[0_4px_0_0_#cbd5e1] rounded-xl border-2 border-[#cbd5e1] '>Login</button></Link>
        <Link to='/signup'><button className='cursor-pointer px-8 py-2  bg-white mr-1 shadow-[0_4px_0_0_#cbd5e1] rounded-xl border-2 border-[#cbd5e1]'>Signup</button></Link>
      </div>
    </div>
  )
}

export default Navbar
