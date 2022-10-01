import { createStore } from 'redux';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducers } from './reducers/cartReducers';
import { productDetailsReducer, productsReducer } from './reducers/productsReducers';

const reducers = combineReducers({cart: cartReducers,
    products: productsReducer,
    productDetails: productDetailsReducer
});

const middleware = [thunk];

const localStorageData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const INITIAL_STATE = {
    cart: {
        cartItems: localStorageData
    }
};

export const store = createStore(
    reducers,
    INITIAL_STATE,
    applyMiddleware(...middleware)
);

