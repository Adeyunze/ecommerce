import React from 'react';
import bag from '../Images/bag.svg';
import heart from '../Images/heart.svg';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useFavContext } from '../context/favourite_context';

const Cart = () => {
  const { cart } = useCartContext();
  const { favourite } = useFavContext();
  return (
    <div className='flex items-center justify-between '>
      <Link to={'/favourite'} className='relative mr-3'>
          <img src={heart} alt="heart" className='w-[30px] h-[30px] cursor-pointer' />
          {favourite.length > 0 && <div className='w-[7px] h-[7px] bg-red-600 rounded-xl absolute top-0 right-0'></div>}
      </Link>
      <Link to={"/cart"} className='relative'>
        <img src={bag} alt="bag" className='w-[30px] h-[30px] mr-3 cursor-pointer' />
        <span className='absolute font-sans top-[5px] left-[10px]'>{cart.length}</span>
      </Link>
    </div>
  )
}

export default Cart