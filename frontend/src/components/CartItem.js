import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartItems } from '../redux/actions/cartActions';
import './CartItem.css';

export const CartItem = ({ item, cartItemQuantity }) => {
    const [qty, setQty] = useState(item.qty);
    const dispatch = useDispatch();
    const onChangeHandler = (e, id) => {
        setQty(e.target.value);
        dispatch(updateCartItems(id, e.target.value));
    };
    const deleteHandler = () => {
        dispatch(removeFromCart(item.product));
    };

    return (
        <div className='cartItem'>
            <div className='cartItem__image'>
                <img src={item.imageUrl}
                    alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className='cartItem__name'>
                <p>{item.name}</p>
            </Link>
            <p>Price: ${item.price}</p>
            <select className='cartItem__select' value={qty} onChange={(e) => onChangeHandler(e, item.product)}>
                {[...Array(item.countInStock).keys()].map(val => <option key={val + 1} value={val + 1}>{val + 1}</option>)}
            </select>

            <button className='cartItem__deleteBtn' onClick={deleteHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}
