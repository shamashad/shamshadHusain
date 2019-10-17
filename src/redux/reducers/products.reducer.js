import {
    GET_PRODUCTS_REQUEST, 
    GET_PRODUCTS_REQUEST_SUCCESS, 
    GET_PRODUCTS_REQUEST_FAILURE, 
    ADD_PRODUCT_TO_CART_REQUEST,
    UPDATE_PRODUCT_QUANTITY,
    REMOVE_PRODUCT_REQUEST,
    INCREASE_QUANTITY,
    DISCREASE_QUANTITY
} from "../action";

const initialState = {
    loading: false,
    productData: null,
    error: null,
    cartData:[]
};
export const getProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_PRODUCTS_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                productData: action.payload
            };
        case GET_PRODUCTS_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ADD_PRODUCT_TO_CART_REQUEST:
            return {
                ...state,
                loading: false,
                cartData: [...state.cartData, action.payload]
            };
        case UPDATE_PRODUCT_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map(product =>{
                    if(product.id == action.payload.id){
                        product.qty++;
                    }
                    return product;    
                })
            }
        case REMOVE_PRODUCT_REQUEST:
            return {
                ...state,
                cartData: state.cartData.filter(item => action.payload.id !== item.id)
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map(product =>{
                    if(product.id == action.payload.id){
                        product.qty++;
                    }
                    return product;    
                })
            }
        case DISCREASE_QUANTITY:
            return {
                ...state,
                cartData: state.cartData.map(product =>{
                    if(product.id == action.payload.id){
                        product.qty--;
                    }
                    return product;    
                })
            }
        default:
            return state;

    }
}