import React from 'react';
import { useCartContext } from '../context/cart_context';
import BreadCrumbs from '../components/BreadCrumbs';
import CartItems from '../components/CartItems';
import CartColumns from '../components/CartColumns';
import '../styles/Cart.css'

const CartPage = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
  if(cart.length < 1) {
    return (
      <>
        <BreadCrumbs page={"Cart"} />
        <div className='flex justify-center items-center h-[60vh]'>
          <h1 className='text-center text-3xl font-medium'>Your cart is empty</h1>
        </div>
      </>
    )
  }
  return (
    <div className=''>
      <BreadCrumbs page={"Cart"} />
      <section className='my-24 xl:mx-24 mx-6'>
        <CartColumns/>
        <CartItems/>
        <div className='mt-6 flex justify-end'>
        <button className='bg-sky-500 text-white p-2 rounded text-sm tracking-wide' onClick={() => clearCart()}>Clear Shopping Cart</button>
        </div>
        <div className='flex justify-end mt-5'>
          <div className='w-fit border rounded p-7'>
            <h5 className='bottom_total'><strong>Subtotal: </strong> <span className='font-sans'>{`£${total_amount}`}</span> </h5>
            <h5 className='bottom_total'><span className='text-md'>Shipping fee: </span> <span className='font-sans'> {`£${shipping_fee}`}</span></h5>
            <hr />
            <h5 className='bottom_total text-2xl'><strong>Total: </strong> <span className='font-sans'>£{total_amount + shipping_fee}</span> </h5>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartPage