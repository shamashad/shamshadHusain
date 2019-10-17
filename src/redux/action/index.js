export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_REQUEST_SUCCESS = 'GET_PRODUCTS_REQUEST_SUCCESS';
export const GET_PRODUCTS_REQUEST_FAILURE = 'GET_PRODUCTS_REQUEST_FAILURE';
export const ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
export const REMOVE_PRODUCT_REQUEST = 'REMOVE_PRODUCT_REQUEST';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DISCREASE_QUANTITY = 'DISCREASE_QUANTITY'; 

export const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST
});

export const getProductsRequestSuccess = payload => ({
type: GET_PRODUCTS_REQUEST_SUCCESS, payload
});

export const getProductsRequestFailure = payload => ({
type: GET_PRODUCTS_REQUEST_FAILURE, payload
});

export const addProductToCartRequest = payload => ({
  type: ADD_PRODUCT_TO_CART_REQUEST, payload
});

export const updateProductQuantity = payload => ({
  type: UPDATE_PRODUCT_QUANTITY, payload
});

export const removeProductRequest = payload => ({
  type: REMOVE_PRODUCT_REQUEST, payload
});

export const increaseQuantity = payload => ({
  type: INCREASE_QUANTITY, payload
});
export const discreaseQuantity = payload => ({
  type: DISCREASE_QUANTITY, payload
});