import React from "react";
import "./ProductCart.css";
import { Rating } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";

function ProductCart(props) {
  return (
    <div className="cart_items">
      <div className="item_image">
        <img
          src={props.src}
          alt="failed to load"
          height="200px"
          width="120px"
        />
      </div>
      <div className="item_description">
        <div className="item_desc">{props.desc}</div>
        <div className="item_rating">
          <Rating value={props.rating} precision={0.5} readOnly />
        </div>
        <div className="item_price">$ {props.pri}</div>
        <div className="quantity">
          <AddBoxIcon />
          Quantity
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
