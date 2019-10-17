import React from "react";

const CartPriceOverview = ({totalCartItem, totalPrice, totalDiscount, totalCostPrices}) => {
  return(
    <div className="cartPrice-container">
      <div className="totalHeading"><strong>Total</strong></div>
      <div className="items"><span>{`Items(${totalCartItem})`}</span> <span>:</span> <span>&#36;{totalPrice}</span></div>
      <div className="discount"><span>Discount</span> <span>:</span> <span>&#8722;&#36;{totalDiscount}</span></div>
      <div className="discount"><span>Type Discount</span> <span>:</span> <span>0</span></div>
      <div className="orderTotal"><strong>Order Total</strong> <strong>:</strong> <strong>&#36;{(totalCostPrices).toFixed(2)}</strong></div>
    </div>
  )
}
export default CartPriceOverview;