import { all } from 'redux-saga/effects';
import getProductsSaga from "./product.saga";

export function* rootSaga() {
  yield all([
    getProductsSaga()
  ]);
}