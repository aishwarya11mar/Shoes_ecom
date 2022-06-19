import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({product}) => {

  const [selectedColor, setselectedColor] = useState("blue");



  return (

    <div className="product-card">
      <div className="logo-cart">
        <img src="images/logo.jpg" alt="logo" />
        <i className='bx bx-shopping-bag'></i>
      </div>
      <div className="main-images">
        <img id="blue" className={`blue ${selectedColor === "blue" && "active"}`} src={product.images[0].url} alt={product.name} />
        <img id="pink" className={`pink ${selectedColor === "pink" && "active"}`} src="images/yellow.jpg" alt="blue" />
        <img id="yellow" className={`yellow ${selectedColor === "yellow" && "active"}`} src="images/yellow.jpg" alt="blue" />
      </div>
      <div className="shoe-details">
        <span className="shoe_name">ADDIDAS GAZE ZX</span>

        <div className="stars">
          <i className='bx bxs-star' ></i>
          <i className='bx bxs-star' ></i>
          <i className='bx bxs-star' ></i>
          <i className='bx bxs-star' ></i>
          <i className='bx bx-star' ></i>
        </div>
      </div>
      <div className="color-price">
        <div className="color-option">
          <span className="color">Colour:</span>
          <div className="circles">
            <span className={`circle blue ${selectedColor === "blue" && "active"}`} id="blue" onClick={() => setselectedColor("blue")}></span>
            <span className={`circle pink ${selectedColor === "pink" && "active"}`} id="pink" onClick={() => setselectedColor("pink")}></span>
            <span className={`circle yellow ${selectedColor === "yellow" && "active"}`} id="yellow" onClick={() => setselectedColor("yellow")}></span>
          </div>
        </div>
        <div className="price">
          <span className="price_num">₹999</span>
        </div>
      </div>
      
    <Link  style={{textDecoration: 'none' }} to={`/product/${product._id}`}>
      <div className="button">
        <div className="button-layer"></div>
        <button>Buy Now</button>
      </div>
      </Link>
    </div>

  );

};

export default ProductCard;