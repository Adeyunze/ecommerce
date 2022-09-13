import React from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const AmountBtn = ({increase, decrease, amount}) => {
  return (
    <div className='flex items-center bg-[#F4F4F4] w-[150px] justify-between p-2 rounded mb-4'>
      <button onClick={decrease}>
        <AiOutlineMinus className='text-xl'/>
      </button>
      <p className='text-2xl'>{amount}</p>
      <button onClick={increase}>
        <AiOutlinePlus className='text-xl'/>
      </button>
    </div>
  )
}

export default AmountBtn