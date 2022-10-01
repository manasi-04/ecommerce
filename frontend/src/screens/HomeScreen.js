import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../components/Product'; 
import { productsAction } from '../redux/actions/productActions';
import './HomeScreen.css';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.products);
  const { isLoading, products, error} = getProducts;

  useEffect(() => {
    dispatch(productsAction());
  }, [dispatch]);

  return (
        <div className='homescreen'>
          <h2 className='homescreen__title'>Latest Products</h2>
          <div className='homescreen__products'>
            {isLoading ? <h2>Loading...</h2> : error ? <h2>{error}</h2>
                        : products.map((product) => <Product key={product._id}
                          name={product.name}
                          productId={product._id}
                          description={product.description}
                          price={product.price}
                          imageUrl={product.imageUrl}
                        />)}
          </div>
        </div>
  );
}
