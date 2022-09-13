import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs';
import { useFavContext } from '../context/favourite_context';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FavouritePage = () => {
  const { favourite, addToFavourite } = useFavContext();

  if(favourite.length < 1) {
    return (
      <>
        <BreadCrumbs page={"Favourites"} />
        <div className='flex justify-center items-center h-[60vh]'>
          <h1 className='text-center text-3xl font-medium'>No Products to display</h1>
        </div>
      </>
    )
  }

  return (
    <>
      <BreadCrumbs page={"Favourites"}/>
      <div className='xl:mx-20 mx-6 my-16'>
        <h1 className='text-3xl flex justify-center items-center my-8'>Favourites</h1>
        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {favourite.map(item => {
            const { id, name, price, image } = item;
            const tempFav = favourite.find(item => item.id === id);
            return (
              <article className='relative'>
                <div className='absolute bottom-[70px] right-[10px] bg-white p-2 z-10 rounded-full border border-[#000] cursor-pointer' onClick={() => addToFavourite(id, name, image, price)}>
                  {tempFav ? <BsHeartFill className='text-lg text-[#4A4A4A] bouncy' /> : <BsHeart className='text-lg' />}
                </div>
                <Link key={id} to={`/product/${id}`} className='group relative'>
                  <div className='w-full h-[25rem] group-hover:opacity-95 lg:h-[24rem] bg-gray-200 rounded-lg overflow-hidden'>
                    <img src={image} alt={name} className='w-full h-full object-center object-cover lg:w-full lg:h-full' />
                  </div>
                  <h3 className='mt-4 text-sm text-gray-700'>{name}</h3>
                  <p className='mt-1 text-lg font-medium text-gray-900 font-sans'>£{price}</p>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FavouritePage