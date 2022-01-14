import React from "react";
import "./Body.css";
import Britanni from "../images/brittani-burns.jpg";
import Product from "./Product";
import asp from "../images/asp.png";
import java from "../images/java.png";
import js from "../images/javascript.jpeg";
import python from "../images/python-crash-course.jpg";
import ruby from "../images/ruby.jfif";

function Body() {
  return (
    <div className="body_container">
      <div className="body_firsthead">
        <div className="body_firsttext">
          <h3>Shop with me</h3>
        </div>
        <div className="body_firstimg">
          <img src={Britanni} alt="not found" height="300px" width="900px" />
        </div>
      </div>
      <div className="first_line_items">
        <Product src={asp} desc="demo description" rating="3.5" pri="100" />
        <Product src={java} desc="demo description" rating="4" pri="100" />
        <Product src={js} desc="demo description" rating="4.5" pri="100" />
        <Product src={js} desc="demo description" rating="4" pri="100" />
      </div>
      <div className="second_line_items">
        <Product src={python} desc="demo description" rating="5" pri="100" />
        <Product src={python} desc="demo description" rating="5" pri="100" />
      </div>
      <div className="third_line_items">
        <Product src={ruby} desc="demo description" rating="2" pri="100" />
      </div>
    </div>
  );
}

export default Body;
