import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";
function Cart() {
  const basket = useSelector((state) => state.basket);
  return (
    <div className="cart_container">
      <div className="basket_items">
        {basket.map((value) => (
          <ProductCart
            src={value[0]}
            desc={value[1]}
            rating={value[2]}
            pri={value[3]}
          />
        ))}
      </div>
      <div className="checkout_section">Sum total</div>
    </div>
  );
}

export default Cart;
