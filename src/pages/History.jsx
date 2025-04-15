import React from 'react'
// import { BsClockHistory } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { HiArrowLongRight } from "react-icons/hi2";

const History = () => {
    const currHistory = useSelector((store) => store.history)
    console.log(currHistory)
    return (
        <div className='flex flex-col gap-4 w-full pt-5 p-10  h-[95%]'>
  <div className='text-[15px] text-[#b5b2b2dc]'>
    Your recent currency conversions will appear here:
  </div>

 
  <div className='h-full overflow-auto flex flex-col gap-3 pr-2'>
    {currHistory.length === 0 ? (
      <div className='text-gray-400 italic'>No History Yet</div>
    ) : (
      currHistory.map((hist) => (
        <div
          key={hist.id}
          className='flex justify-between items-center bg-[#f5f5f5] p-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200'
        >
        
          <div className='flex items-center gap-2 text-base font-medium text-gray-800'>
            <span className='text-blue-600'>{hist.currVal}</span>
            <span className='uppercase'>{hist.from}</span>
            <HiArrowLongRight className='text-gray-500' />
            <span className='text-green-600'>{hist.convertval}</span>
            <span className='uppercase'>{hist.to}</span>
          </div>

          {/* Right Side: Timestamp */}
          <div className='text-sm text-gray-500 font-light'>
            {hist.date}
          </div>
        </div>
      ))
    )}
  </div>
</div>

    )
}

export default History
