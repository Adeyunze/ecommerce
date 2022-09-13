import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
// import { TbMinusVertical } from 'react-icons/tb';

const Search = () => {
  return (
    <div className='flex items-center relative justify-center search-container md:w-96 w-[100%] h-[41px]'>
      <input type="text" placeholder="Search products or brand" className='md:mr-3 myInput placeholder:text-black placeholder:font-extralight font-regular w-[100%] h-[100%] pl-5 rounded' />
      <IoSearchOutline className='text-3xl absolute right-[30px]  text-[#A5A5A5] cursor-pointer'/>
    </div>
  )
}

export default Search