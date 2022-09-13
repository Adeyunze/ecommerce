import React from 'react'

const CartColumns = () => {
  return (
    <div className='text-xl cart_columns place-items-center sm:grid hidden border-b py-5 capitalize'>
          <h5>item</h5>
          <h5>price</h5>
          <h5>quantity</h5>
          <h5>subtotal</h5>
          <span></span>
    </div>
  )
}

export default CartColumns