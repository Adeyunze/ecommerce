import React from 'react'
import { useSearchContext } from '../context/search_context';
import { Link } from 'react-router-dom';
import '../styles/Home.css'
const ModalDesign = () => {
  const {searchList, setModal} = useSearchContext()

  return (
    <div className='flex justify-center fixed bg-[#515151E6] z-40 w-[100vw] h-[100%]'>
      <div className='h-fit md:w-[45%] w-[90%] bg-[#fff] shadow-lg  rounded-b'>
        <main className='p-7'>
          {searchList.map(list => {
            const {id, name} = list;

            return (
                <Link key={id} to={`/product/${id}`} onClick={() => setModal(false)}>
                  <p key={id} className='text-base pb-2 hover:underline'>{name}</p>
                </Link>
                )
              })}
        </main>
      </div>
    </div>
  )
}

export default ModalDesign