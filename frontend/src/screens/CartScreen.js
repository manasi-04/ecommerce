import React from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from '../components/CartItem';
import { Link } from 'react-router-dom';
import './CartScreen.css';

export const CartScreen = ({cartItemQuantity}) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const itemsCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }
  const cartSubTotal = () => {
    return cartItems.reduce((price, item) => price + (item.price * item.qty), 0);
  }
  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? <h2>Your cart is empty<Link to='/'>Go Back</Link></h2>
                                : cartItems.map(item => <CartItem key={item.product} item={item}
                                  cartItemQuantity={cartItemQuantity}/>)}
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Subtotal {itemsCount()} items</p>
          <p>${cartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
