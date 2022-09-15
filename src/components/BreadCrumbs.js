import React from 'react';
import arrow from '../Images/arrow-reverse.svg';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import '../styles/Men.css'
import { useNavigate } from 'react-router-dom';

const BreadCrumbs = ({page}) => {
  const navigate = useNavigate()
  // const page = props.page;
  return (
    <section>
      <div className='bg-[#F4F4F4] flex items-center xl:px-24 px-6'>
        <div className='flex items-center justify-center group cursor-pointer w-fit border-x border-[#000] p-2' onClick={() => navigate(-1)}>
          <img src={arrow} alt="arrow" className='w-[7px]' />
          <p className='font-medium pl-2'>Back</p>
        </div>
        <div>
          <div className='flex items-center justify-center text-sm w-fit mx-4 group relative breadcrumbs-home'>
            <AiOutlineHome className='text-xl '/>
            <Link className='font-medium pl-3' to='/'>
              <span aria-hidden="true" className='absolute inset-0'></span>
              Home
            </Link>
          </div>
        </div>
        <p className='pl-4 font-medium text-sm'>{page}</p>
      </div>
    </section>
  )
}

export default BreadCrumbs