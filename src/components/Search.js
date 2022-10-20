import React, {useRef} from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSearchContext } from '../context/search_context';


const Search = () => {
  const {setSearch, search, setModal} = useSearchContext()
  const inputElement = useRef()


  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleClick = (e) => {
    setModal(false)
    inputElement.current.value = ''
    setSearch('')
  }
  return (
    <div className='flex items-center relative justify-center search-container md:w-96 w-[100%] h-[41px]'>
      <input type="text" placeholder="Search products or brand" className='md:mr-3 myInput placeholder:text-black placeholder:font-extralight font-regular w-[100%] h-[100%] pl-5 rounded' onChange={handleSearch} onClick={() => setModal(true)} ref={inputElement}/>
      {search.length >= 2 ?
      <IoIosCloseCircleOutline className='text-2xl absolute right-[60px]  text-[#A5A5A5] cursor-pointer hover:text-[#000]' onClick={handleClick}/>:
      null
      }
      <IoSearchOutline className='text-2xl absolute right-[30px]  text-[#A5A5A5] cursor-pointer'/>
    </div>
  )
}

export default Search