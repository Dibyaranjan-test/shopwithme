import React from "react";
import logo from "../images/shopmelogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Head.css";
import { Link } from "react-router-dom";

function Head() {
  return (
    <div className="head_container">
      <img src={logo} alt="not found" className="head_logo" />
      <input type="text" className="search_text" />
      <SearchIcon className="search_icon" />
      <div className="head_options">
        <div className="head_option">
          <div className="first_line">Hello Guest</div>
          <Link to="/login">
            <div className="second_line">Login</div>
          </Link>
        </div>
        <div className="head_option">
          <div className="first_line">Orders </div>
          <div className="second_line">& Returns</div>
        </div>
        <div className="head_option">
          <div className="first_line">
            <Link to="/checkout">
              <ShoppingCartIcon className="cart_icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
