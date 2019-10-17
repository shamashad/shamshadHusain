import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Optional } from "../../utils/Optional";
import ErrorBoundary from '../../ErrorBoundary';
import CartRow from './CartRow';
import CartPriceOverview from "./CartPriceOverview";
import { getProductsRequest } from '../../redux/action';
import './CartPage.css';

const mapStateToProps = state => {
  const { cartData } = state.getProductsReducer
  return { cartData };
};

const mapDispatchToProps = {
  getProductsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(class CartPage extends Component {
  state = {
    currentAddedCart: {}
  };

  static propTypes = {
    cartData: PropTypes.array
  };

  componentDidMount() {
    if (!this.props.getProductsRequest) {
      this.propsgetProductsRequest();
    }
  }
  /*@Get all selected product in cart*/
  getCartData = () => Optional.ofNullable(this.props.cartData).orElse([]);
  /*@Toatal price for all selected products*/
  totalPrice = () => this.getCartData().map(item => item.price * item.qty).reduce((prev, curr) => prev + curr, 0);
  /*@Total discount from all products*/
  totalDiscount = () => this.getCartData().map(item => item.discount * item.qty).reduce((prev, curr) => prev + curr, 0);
  /*@Price after discount for all products*/
  totalCostPrices = () => this.totalPrice() - this.totalDiscount();

  render() {
    const cartItemList = this.getCartData().map(cartItem => {
      return <CartRow
        name={cartItem.name}
        id={cartItem.id}
        price={cartItem.price}
        key={cartItem.id}
        qty={cartItem.qty}
      />
    })
    return (
      <ErrorBoundary>
        <div className="cartPage-container">
          <div className="heading">
            <div className="rightCap"><Link to="/"><button>Back</button></Link></div>
            <div className="cartTitle">Order Summary</div>
          </div>
          <div className="cart-overview-container">
            <div className="cart-product-overview">
              <div className="product-detail-heading">
                <span className="totalItem">{`Items(${this.getCartData().length})`}</span>
                <span className="qty">Qty</span>
                <span className="price">Price</span>
              </div>
              {cartItemList}
            </div>
            <div className="cart-price-overview">
              <CartPriceOverview
                totalCartItem={this.getCartData().length}
                totalPrice={this.totalPrice()}
                totalDiscount={this.totalDiscount()}
                totalCostPrices={this.totalCostPrices()}
              />
            </div>
          </div>
        </div>
      </ErrorBoundary>
    )
  }
})
