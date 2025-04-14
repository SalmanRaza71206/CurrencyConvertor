import React, { useState } from 'react'

const Input = ({ currVal, setcurrVal }) => {

  return (
    <div className='w-[35%] h-[80px] relative'>
      <label htmlFor="currInput" className=' absolute top-1.5 pl-4 text-[#a4a2a2]'>Amount</label>
      <input
        type="tel"
        name="currInput"
        value={currVal}
        onChange={(e) => { setcurrVal(e.target.value) }}
        className=' outline-none border-2 border-[#cbd5e1] rounded-[8px] w-full h-full p-4 pl-4 pt-10 text-2xl  '
      />

    </div>
  )
}

export default Input
