/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import heart from '../Images/heart.svg';
import AmountBtn from './AmountBtn';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { useFavContext } from '../context/favourite_context';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import '../styles/Product.css';



const ProductCart = ({product}) => {
  const { addToCart } = useCartContext()
  const { addToFavourite, favourite } = useFavContext()
  const {id, name, image, price} = product;
  const [amount, setAmount] = useState(1);


  const tempFav = favourite.find(item => item.id === id);

  const increase = () => { 
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if(tempAmount > 8) {
        return 8;
      }
      return tempAmount;
    })
  }

  const decrease = () => { 
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if(tempAmount < 1) {
        return 1;
      }
      return tempAmount;
    })
  }

  return (
      <div className='mt-5'>
        <AmountBtn increase={increase} decrease={decrease} amount={amount} />
        <Link to='/cart'>
          <button className='bg-[#30a74b] text-white sm:w-[400px] w-[100%] py-2 px-7 rounded flex justify-center items-center uppercase tracking-widest' onClick={() => addToCart(id, amount, product)} >
            Add to cart
          </button>
        </Link>
        <button className='border relative mt-5 text-black sm:w-[400px] w-[100%] h-[40px] px-7 rounded flex justify-center items-center uppercase' onClick={() => addToFavourite(id, name, image, price)}>
          <div className='absolute left-0 border px-2 py-[9px] rounded-l bg-[#F4F4F4]'>
            {tempFav ? <BsHeartFill className='text-xl text-[#4A4A4A] bouncy' /> : <BsHeart className='text-xl' />}
          </div>
          <span>Favourite</span>
        </button>
      </div>
  )
}

export default ProductCart