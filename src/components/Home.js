import React from 'react';
import { landing, company } from '../data';
import { Link } from 'react-router-dom';
import arrow from '../Images/arrow.svg'
import "../styles/Home.css"

const Home = () => {
  return (
    <main className='overflow-'>
      <div className="top-head md:flex-row flex-col flex items-center justify-center px-8 py-12 border-b border-[#000]">
        {landing.filter(item => item.position === 'top').map(item => {
          return (
            <div key={item.id} className='group relative md:pt-0 xl:mx-5 md:mx-3 sm:mx-1 mx-0 mt-5 flex flex-col '>
              <div className=''>
                <img src={item.image} alt="Head-img" className='h-[100%] w-[516px]' />
              </div>
              <div className="bottom-land mt-3 flex justify-between items-center lg:text-[16px] md:text-xs text-[16px]">
                <p>{item.desc}</p>
                <p className='underline '>
                  <Link to={`${item.url}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      Shop Now
                  </Link>
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="favourites flex flex-col justify-center items-center mt-8">
        <h1 className='text-2xl'>Y&S FAVOURITES</h1>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 px-8 py-12 border-b border-[#000]'>
          {landing.filter(item => item.position === 'favourites').map(item => {
            return (
              <div key={item.id} className='group relative mx-5'>
                <div>
                  <img src={item.image} alt="favourite img" />
                </div>
                <div className="bottom-favourite pt-3 xl:text-base md:text-xs text-[16px]">
                  <p>{item.desc}</p>
                  <div className='flex items-center mt-[1px]'>
                    <p className='font-medium'>
                      <Link to={`${item.url}`}>
                        <span aria-hidden="true" className='absolute inset-0'></span>
                        {item.action}
                      </Link>
                    </p>
                    <img src={arrow} alt="arrow" className='ml-2' />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="company my-12 flex flex-col justify-center items-center">
        <h1 className='text-2xl'>SHOP BY BRANDS</h1>
        <div className='flex overflow-x-auto py-12  border-b border-[#000]'>
            {company.map(item => {
              return (
                <div key={item.id} className='mx-3 cursor-pointer hover:scale-125 transition ease-out duration-300 first:px-8 last:px-8 shrink-0'>
                  <img src={item.image} alt="comapany-img" className='md:h-14 max-w-[100%] max-h-14' />
                </div>
              )
            })}
        </div>
      </div>
      <div className="bottom-head md:flex-row flex-col flex items-center justify-center px-8 py-12">
        {landing.filter(item => item.position === 'bottom').map(item => {
          return (
            <div key={item.id} className='group relative md:pt-0 xl:mx-5 md:mx-3 sm:mx-1 mx-0 mt-5 flex flex-col '>
              <div className=''>
                <img src={item.image} alt="Head-img" className='h-[100%] w-[516px]' />
              </div>
              <div className="bottom-land mt-3 flex justify-between items-center lg:text-[16px] md:text-xs text-[16px]">
                <p>{item.desc}</p>
                <p className='underline '>
                  <Link to={`${item.url}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      Shop Now
                  </Link>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home