import React, { useState } from 'react'
import { RiCoinsLine } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import Input from '../Components/Input';
import SelectBox from '../Components/SelectBox';
import fetchData from '../hooks/useFetch';
import { IoIosSwap } from "react-icons/io"
import History from './History';
import { useDispatch } from 'react-redux';
import { addHistory} from '../features/History/historySlice';

const CurrencyConvert = () => {
  const [currVal, setcurrVal] = useState(0)
  const [convertval, setconvertVal] = useState('0')
  const [active, setActive] = useState('convert')
  const [from, setFrom] = useState('AED')
  const [to, setto] = useState('INR')
  const [selectBoxActive, setselectBoxActive] = useState(null)
  const dispatch = useDispatch()

  const ConvertCur = async () => {
    const data = await fetchData(from);
    const fixVal = (currVal * data[to]).toFixed(4)
    // console.log(data[JSON.stringify(to)])
    setconvertVal(fixVal)
     
    dispatch(addHistory({from,to,convertval:fixVal,currVal}))
  };

  const handleSwap = () => {
    setFrom(to)
    setto(from)
  }


  return (
    <div className='m-auto mt-16 flex justify-center items-center w-[80%]  h-[470px]'
    onClick={()=>setselectBoxActive(null)}
    >
      <div className='w-full h-4/5 rounded-4xl border-2 border-[#cbd5e1] p-8 pt-6'>
        <div className='rounded-4xl  border-2 h-[50px] flex items-center p-1 gap-1 text-white border-[#cbd5e1]'>

          <span
            onClick={() => setActive('convert')}
            className={`w-1/2 py-2 rounded-4xl text-center cursor-pointer hover:bg-[#cbd5e14b]  ${active === 'convert' ? 'bg-[#8ff156e6]' : 'bg-white text-black'
              }`}
          >
            <span className="flex items-center justify-center gap-2 text-black">
              <RiCoinsLine className=' text-2xl' />
              Convert
            </span>
          </span>


          <span
            onClick={() => setActive('history')}
            className={` w-1/2 py-2 rounded-4xl text-center cursor-pointer hover:bg-[#cbd5e14b] ${active === 'history' ? 'bg-[#8ff156e6]' : 'bg-white text-black'

              }`}
          >
             <span className="flex items-center justify-center gap-2 text-black">
              <MdHistory className='text-2xl' />
              History
            </span>
          
          </span>
        </div>
        {
          active === 'history' ? (
           <History/>
          ):
          (
            <>
        <div className=' relative flex items-center gap-3.5 w-full  p-10'>
          <Input currVal={currVal} setcurrVal={setcurrVal} />
          <SelectBox Boxid='from' CurrSelectState={from} setCurrSelectState={setFrom} selectBoxActive={selectBoxActive} setselectBoxActive={setselectBoxActive} />
          <span className=' rounded-full bg-white border-2 border-[#cbd5e1ba] p-3 absolute left-[63%] z-10 cursor-pointer'
            onClick={handleSwap}
          > <IoIosSwap className='text-2xl' /></span>
          <SelectBox Boxid='to' CurrSelectState={to} setCurrSelectState={setto} selectBoxActive={selectBoxActive} setselectBoxActive={setselectBoxActive} />

        </div>
        <div className='w-full flex justify-between pt-5 pl-20  p-10 items-center'>
          <div className='flex flex-col mt-1'>
            <span className='text-xl pb-1.5 text-[#a29f9f]'>
              {`${currVal} ${from} =`}
            </span>
            <span className='text-3xl'>{`${convertval} ${to}`}</span>
          </div>

          <button type='submit'
            className='bg-[#8ff156e6] shadow-[0_4px_0_0_#35af00] px-25 p-4 rounded-2xl cursor-pointer'
            onClick={ConvertCur}
          >Convert</button>
        </div>
        </>
        )}
      </div>
    </div>
  )
}

export default CurrencyConvert
