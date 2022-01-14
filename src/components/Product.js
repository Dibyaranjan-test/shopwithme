import React from "react";
import "./Product.css";
import { Rating } from "@mui/material";

function Product(props) {
  const addCartHandler = () => {
    console.log("add to cart button clicked");
  };
  return (
    <div className="product">
      <h3 className="productdescription">{props.desc}</h3>
      <h2>{props.pri}</h2>
      <Rating value={props.rating} precision={0.5} readOnly />
      <img
        src={props.src}
        alt="not found"
        className="productimage"
        height="300px"
        width="180px"
      />
      <button value="add to cart" onClick={addCartHandler}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
