import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsRequest, addProductToCartRequest, updateProductQuantity } from '../../redux/action';
import { Optional } from "../../utils/Optional";
import Product from './Product';
import ErrorBoundary from '../../ErrorBoundary';
import './ProductsPage.css';

const mapStateToProps = state => {
  const { productData, error, cartData } = state.getProductsReducer
  return { productData, error, cartData };
};

const mapDispatchToProps = {
  getProductsRequest,
  updateProductQuantity,
  addToCart: addProductToCartRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(class ProductsPage extends Component {
  state = {
    currentAddedCart: {}
  };

  static propTypes = {
    addToCart: PropTypes.func,
    cartData: PropTypes.array,
    updateProductQuantity: PropTypes.func
  };

  componentDidMount() {
    this.props.getProductsRequest();
  }
  /*@Get current product detail */
  currentProductDataHandler = (cartData) => {
    this.setState({
      currentAddedCart: { ...this.state.currentAddedCart, cartData }
    })
  }

  /*@ Get price after discount*/
  getPriceWithDiscount = (price, discount) => {
    return price - ((price * discount) / 100);
  }
  /*@Get products details from available data */
  getProductItems = () => Optional.ofNullable(this.props.productData).orElse(null);
  /*@Get selected products in cart*/
  getCartData = () => Optional.ofNullable(this.props.cartData).orElse([]);
  /*@Get current product name*/
  getCurrentProductName = () => Optional.ofNullable(this.state.currentAddedCart).map(currentAddedCart => currentAddedCart.cartData).map(cartData => cartData.name).orElse('');
  /*@Get current product quantity*/
  getCurrentProductQty = () => Optional.ofNullable(this.getCartData().find(product => (product.name == this.getCurrentProductName()) && product.qty)).map(product => product.qty).orElse('');

  render() {
    const { addToCart, cartData, updateProductQuantity } = this.props;
    const AllProductElement = this.getProductItems() && this.getProductItems().map(product => {
      return <Product
        id={product.id}
        key={product.id}
        name={product.name}
        price={product.price}
        discount={product.discount}
        priceWithDiscount={this.getPriceWithDiscount(product.price, product.discount)}
        img_url={product.img_url}
        addToCart={addToCart}
        currentProductData={this.currentProductDataHandler}
        qty={0}
        cartData={cartData}
        updateProductQuantity={updateProductQuantity}
      />
    })

    return (
      <ErrorBoundary>
        <div className="main-container">
          <div className="heading">
            <div className="itemTitle">All Items</div>
            {this.getCurrentProductName() && <div className="itemsAddToCart">{`${this.getCurrentProductName()} (${this.getCurrentProductQty()}) is added to cart`}</div>}
            <div className="gotoCart"><Link to="/CartPage"><button>Go to cart</button></Link><span>{this.getCartData().length}</span></div>
          </div>
          <div className="main-product-container">
            {AllProductElement}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
});