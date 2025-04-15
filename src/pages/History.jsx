import React from 'react'
// import { BsClockHistory } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { HiArrowLongRight } from "react-icons/hi2";

const History = () => {
    const currHistory = useSelector((store)=> store.history)
    console.log(currHistory)
  return (
    <div className='flex  gap-3.5 w-full pt-5 p-10 flex-col'>
     <div className='text-[15px] text-[#b5b2b2dc]'>Your recent currency conversions will appear here :</div>
    
    {
        currHistory.length === 0 ? (
            <div>No History Yet</div>
        ) : (
            currHistory.map((hist)=>(
                <div key={hist.id} className='flex gap-1.5 items-center'>
                 <span>{hist.currVal}</span>
                 <span>{hist.from}</span>
                 <HiArrowLongRight/>
                 <span>{hist.convertval}</span>
                 <span>{hist.to}</span>
                </div>
            ))
        )
     }
    </div>
  )
}

export default History
