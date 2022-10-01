import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = ({click}) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const cartItemsTotal = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };

    return (
        <nav className='navbar'>
            <div className='navbar__logo'>
                <h2>MERN shopping cart</h2>
            </div>
            <ul className='navbar__links'>
                <li>
                    <Link to='/cart' className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='cartlogo__badge'>{cartItemsTotal()}</span>
                        </span>

                    </Link>

                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>

                </li>
            </ul>

            <div className='hamburger__menu' onClick={() => click(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}
