import * as actionTypes from '../constants/cartConstants';

export const cartReducers = (state = {cartItems: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const existingItem = state.cartItems.find(x => x.product === item.product);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existingItem.product ? item : x)
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                };
            } 
        case actionTypes.REMOVE_FROM_CART: 
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            };
        case actionTypes.UPDATE_ITEM_QUANTITY: {
            const currItemsInCart = state.cartItems.map(data => {
                if (data.product === action.payload.id) {
                    return {
                        ...data, 
                        qty: action.payload.qty
                    };
                } else {
                    return data;
                }
            });
            return {
                ...state,
                cartItems: currItemsInCart
            };
        }
        default: return state;
    }
}
