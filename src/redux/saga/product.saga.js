import { call, takeEvery, put, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS_REQUEST, getProductsRequestSuccess, getProductsRequestFailure } from '../action';
import { getProducts } from '../../Api';

export default function* getProductsSaga() {
  yield takeEvery(GET_PRODUCTS_REQUEST, function* () {
    let response = yield call(getProducts);
		if (response) {
			yield put(getProductsRequestSuccess(response));
		} else {
			yield put(getProductsRequestFailure(response));
		}
  });
}