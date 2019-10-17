import 'regenerator-runtime/runtime';// need for ES6 Generators to work correctly
import { createStore, applyMiddleware } from "redux";
// it is middleware needed only for development purposes
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from "./saga";
import { rootReducer } from "./reducers";
import createSagaMiddleware from 'redux-saga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// apply each middleware
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middleware));
export default store;

// run the saga
sagaMiddleware.run(rootSaga);