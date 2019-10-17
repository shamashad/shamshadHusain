import { combineReducers } from "redux";
import { getProductsReducer } from './products.reducer';

const combinedReducers = combineReducers({
	getProductsReducer,
});
export const rootReducer = function (state, action) {
	return combinedReducers(state, action)
};