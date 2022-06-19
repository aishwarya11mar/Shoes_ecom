import React, { Fragment } from "react";

import "./Home.css";

import MetaData from "../layout/MetaData";


const Slider = () => {
  
  return (
    
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Sindh Boot House</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#">
              <button>
                Scroll {/* <CgMouse /> */}
              </button>
            </a>
          </div>

          
        </Fragment>
      
  );
};

export default Slider;