import React from 'react'

const NoProd = () => {
  return (
    <div className='flex justify-center fixed bg-[#515151E6] z-40 w-[100vw] h-[100%]'>
      <div className='h-fit md:w-[45%] w-[90%] bg-[#fff] shadow-lg  rounded-b'>
        <h1 className='flex justify-center items-center p-8'>No products to display</h1>
      </div>
    </div>
  )
}

export default NoProd