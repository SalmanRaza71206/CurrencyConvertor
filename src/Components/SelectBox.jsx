import React, { useEffect, useState } from 'react'
import { fetchCurrSelectOptions } from '../hooks/useFetch'

const SelectBox = ({ Boxid, CurrSelectState, setCurrSelectState, selectBoxActive, setselectBoxActive }) => {
  console.log(CurrSelectState)
  const [dummyCurrencyData, setDummyCurrencyData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCurrSelectOptions();
      setDummyCurrencyData(data);
      // console.log(data)
    };
    loadData();
  }, [])

 

  return (
    <div className="relative w-[35%] h-[80px]"
    onClick={(e)=>e.stopPropagation()}
    >

      <label htmlFor="selectInput" className=' absolute top-1.5 pl-4 text-[#a4a2a2]'>{Boxid == 'from' ? ' From' : 'to'}</label>
      <input
        type='search'
        name="selectInput"
        value={CurrSelectState}
        onChange={(e)=>setCurrSelectState(e.target.value)}
        onClick={() => setselectBoxActive((prev) => (prev === Boxid ? null : Boxid))}
        className=' outline-none border-2 border-[#cbd5e1] rounded-[8px] w-full h-full p-4 pl-4 pt-10 text-2xl  '
      />

      <div
        className={` absolute top-20 w-full h-[250px] bg-white rounded-[5px] border-2 border-[#3433330d] overflow-auto p-4 ${selectBoxActive === Boxid ? 'block' : 'hidden'}`}
        
        >
        {dummyCurrencyData.map((curr) => (

          <div
            className='w-full hover:bg-[#e5e7e975] p-2 rounded-[5px] cursor-pointer'
            onClick={(e) => {
              setCurrSelectState(Object.keys(curr)[0])
              setselectBoxActive(null)
            }}
          >{Object.keys(curr)[0]}</div>
        ))}
      </div>
    </div>
  )
}

export default SelectBox
