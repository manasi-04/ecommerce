import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ProductScreen.css';
import { getProductDetails } from '../redux/actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';

export const ProductScreen = ({setCartItemQuantity}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const productDetails = useSelector(state => state.productDetails);
  const { isLoading, product, error } = productDetails;

  const addToCartHandler = () => {
    setCartItemQuantity(qty);
    dispatch(addToCart(product._id, qty));
    navigate('/cart');
  }

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    } 
  }, [dispatch, product, id]);

  return (
    <div className='productscreen'>
      {isLoading ? <h2>Loading...</h2> : error ? <h2>{error}</h2>
        : <>
          <div className='productscreen__left'>
            <div className='left__image'>
              <img src={product.imageUrl}
                alt={product.name} />
            </div>

            <div className='left__info'>
              <p className='left__name'>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className='productscreen__right'>
            <div className='right__info'>
              <p>Price: <span>${product.price}</span></p>
              <p>Status: <span>{product.countInStock > 0 ? 'In stock'
                                                      : 'Out of stock'}</span></p>
              <p>Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((val) => <option key={val + 1} value={val + 1}>{val + 1}</option>)}
                </select>
              </p>
              <button type='button' onClick={addToCartHandler}>Add to cart</button>
            </div>
          </div>
        </>
      }
    </div>
  );
}
