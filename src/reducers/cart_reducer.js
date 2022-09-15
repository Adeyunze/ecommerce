import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'


const cart_reducer = (state, action) => { 
  if(action.type === ADD_TO_CART) {
    const {id, amount, product} = action.payload
    const tempItem = state.cart.find(item => item.id === id);
    if(tempItem) {
      const tempCart = state.cart.map((item) => {
        if(item.id === id) {
          return {
            ...item,
            amount: item.amount + amount,
          }
        } else {
          return item
        }
      })
      return { ...state, cart: tempCart }
    } else { 
      const newItem = {
        id,
        name: product.name,
        amount,
        image: product.images[0].url,
        price: product.price,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if(action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const {id, value} = action.payload
    const tempCart = state.cart.map((item) => {
      if(item.id === id) {
        if(value === 'increase') {
          let newAmount = item.amount + 1;
          if(newAmount > 8) {
            newAmount = 8
          }
          return {...item, amount: newAmount}
        }
        if(value === 'decrease') {
          let newAmount = item.amount - 1;
          if(newAmount < 1) {
            newAmount = 1
          }
          return {...item, amount: newAmount}
        }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }

  if(action.type === REMOVE_CART_ITEM) {
    const {id} = action.payload
    const tempCart = state.cart.filter(item => item.id !== id)
    return { ...state, cart: tempCart }
  }

  if(action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  if(action.type === COUNT_CART_TOTALS) {
    const {cart} = state;
    let total_items = 0;
    let total_amount = 0;
    cart.forEach(item => {
      total_items += item.amount;
      total_amount += item.amount * item.price;
    })
    return { ...state, total_items, total_amount }
  }
}

export default cart_reducer;