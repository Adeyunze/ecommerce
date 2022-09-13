import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span className='text-xl text-[#ffb900]' key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })
  return (
    <div className='flex items-center cursor-pointer hover:opacity-[75%]'>
      <div className='flex'>{tempStars}</div>
      <p className='reviews pl-2'>({reviews} customer reviews)</p>
    </div>
  )
}

export default Stars