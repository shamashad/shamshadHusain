import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../../src/Style/resources/images/placeholder.png';
const Product = ({ name, discount, price, img_url, priceWithDiscount, id, qty, addToCart, currentProductData, cartData, updateProductQuantity }) => {
  /*@Add or update product quantuty in cart*/
  const addProductToCartHandler = (id) => {
    if (cartData.length !== 0) {
      const hasDupes = (arr) => {
        let flag = false;

        for (var i in arr) {
          if (arr[i].id == id) {
            flag = true;
            break;
          } else {
            flag = false;
          }
        }
        return flag;
      }
      if (hasDupes(cartData)) {
        updateProductQuantity({ id })
      } else {
        addToCart({ name, discount, price, img_url, priceWithDiscount, id, qty: qty + 1 });
      }
    } else {
      addToCart({ name, discount, price, img_url, priceWithDiscount, id, qty: qty + 1 });
    }
  }
  return (
    <div className="product-container">
      <div className="product-img-container">
        <div className="discount-container">
          <span>{`${discount}`}&#37;</span>
          <span className="offer"> off</span>
        </div>
        <div className="bookImage">
          <img src={placeholder} alt="Book cover not available" align="middle" />
        </div>
      </div>
      <div className="product-info">
        <div className="itemsName">{name}</div>
        <div className="item-bottom-continer">
          <div className="priceWithoutDiscout">
            <span>&#36;</span>
            <span className="price">{price}</span>
            <hr />
          </div>
          <div className="PriceWithDiscount">
            <strong>&#36;</strong>
            <strong >{priceWithDiscount}</strong>
          </div>
        </div>
        <div className="button-container">
          <button onClick={() => { addProductToCartHandler(id); currentProductData({ name, discount, price, img_url, qty, priceWithDiscount }) }}>Add to cart</button>
        </div>
      </div>
    </div>)
}
Product.propsTypes = {
  name: PropTypes.string,
  discount: PropTypes.number,
  price: PropTypes.number,
  img_url: PropTypes.string,
  priceWithDiscount: PropTypes.any,
  id: PropTypes.any,
  qty: PropTypes.number,
  addToCart: PropTypes.func,
  currentProductData: PropTypes.func,
  cartData: PropTypes.func,
  updateProductQuantity: PropTypes.func
}
export default Product;