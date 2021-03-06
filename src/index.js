import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import ProductsPage from './CartModule/Products/ProductsPage';
import CartPage from './CartModule/Cart/CartPage';


const Routing = ({store}) =>(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route path="/CartPage" component={CartPage} />
        </Switch>
      </Router>
    </Provider>
);

ReactDOM.render(<Routing store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
