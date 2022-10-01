import * as actionTypes from '../constants/productConstants';

export const productsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST: 
            return{
                isLoading: true,
                products: []
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return{
                isLoading: false,
                products: action.payload
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const productDetailsReducer = (state = {product: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                isLoading: true,
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                isLoading: false,
                product: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                isLoading: false,
                error: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {}
            };
        default: return state;
    }
}
