import React from 'react';
import { useCartContext } from '../context/cart_context';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';


const CartItems = () => {
  const { cart, toggleAmount, removeCartItem } = useCartContext();
  
  return (
    <article className=''>
        {cart.map(item => {
          const increase = () => {
            toggleAmount(item.id, 'increase');
          }
          const decrease = () => {
            toggleAmount(item.id, 'decrease');
          }
          return (
            <div key={item.id} className='py-7 border-b cart_items place-items- relative'>
              <div className='flex items-center'>
                <img src={item.image} alt={item.name} className='h-[100px] rounded' />
                <div>
                  <h1 className='ml-3 lg:text-sm text-xs font-medium'>{item.name}</h1>
                  <h1 className='font-sans sm:hidden block bottom-[40px] ml-3 text-sm mt-3'>{`£${item.price}`}</h1>
                </div>
              </div>
              <h1 className='font-sans sm:block hidden bottom-[40px] m-auto'>{`£${item.price}`}</h1>
              <div className='m-auto'>
                <div className='flex  items-center bg-[#F4F4F4] w-[100px] h-[40px] justify-between p-2 rounded'>
                  <button onClick={decrease}>
                    <AiOutlineMinus className='text-xl'/>
                  </button>
                  <p className='text-xl'>{item.amount}</p>
                  <button onClick={increase}>
                    <AiOutlinePlus className='text-xl'/>
                  </button>
                </div>
              </div>
              <h1 className='font-sans sm:block hidden m-auto'>£{item.price * item.amount}</h1>
              <button onClick={() => removeCartItem(item.id)} className='sm:ml-0'>
                <MdDelete className='text-xl'/>
              </button>
            </div>
          )
        })}
      </article>
  )
}

export default CartItems