import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { removeProductRequest, increaseQuantity, discreaseQuantity } from '../../redux/action';

const mapStateToProps = state => {
  const { productData, error, cartData } = state.getProductsReducer
  return { productData, error, cartData };
};

const mapDispatchToProps = {
  removeProduct: removeProductRequest,
  increase: increaseQuantity,
  discrease: discreaseQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(class CartRow extends Component {

  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.any,
    price: PropTypes.number,
    qty: PropTypes.number,
    removeProduct: PropTypes.func,
    increase: PropTypes.func,
    discrease: PropTypes.func
  };

  render() {
    const { name, id, price, qty, removeProduct, increase, discrease } = this.props;
    const totalPrice = Number(price * qty);
    return (
      <div className="row-container">
        <div className="productInfo">
          <div className="rowImage">
            <img href="/" />
          </div>
          <div className="productName">
            <span>{name}</span>
          </div>
          <div className="removeProduct" onClick={() => removeProduct({ id })}>X</div>
        </div>
        <div className="qtyInfo">
          <button className="minius" disabled={qty <= 1} onClick={() => discrease({ id })}>-</button>
          <span className="qty">{qty}</span>
          <button className="plus" onClick={() => increase({ id })}>+</button>
        </div>
        <div className="priceInfo">
          <strong>&#36;</strong>
          <strong>{totalPrice}</strong>
        </div>
      </div>)
  }
});
