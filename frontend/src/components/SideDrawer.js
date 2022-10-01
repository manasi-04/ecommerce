import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SideDrawer.css';

export const SideDrawer = ({show}) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const cartItemsTotal = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };
    return (
        <div className={'sidedrawer ' + (show ? 'show' : '')}>
            <ul className='sidedrawer__links'>
                <li>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='sidedrawer__badge'>
                                {cartItemsTotal()}
                            </span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    );
}
