import { imageURL1 } from '../constants/data';
import React, { Fragment, Component, useState, useEffect } from "react";
import { Box } from '@material-ui/core';
import { Link , useParams } from "react-router-dom";
//import ReactStars from "react-rating-stars-component";
import "../Home/Home.css";
import ProductCard from "../Home/ProductCard.jsx";
import './Products.css';

import { getProduct,clearErrors ,getProductByCategory} from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";
//import {category} from '../Header/CategoryItem.jsx';




const CategoryCard = ({history,product,music}) => {

  
  const alert = useAlert();
   const dispatch = useDispatch();
   const {loading,error,products} = useSelector(
     (state) => state.products
   );
   const [mark, setmark] = useState("Casual");



   useEffect(() => {
    window.scrollTo(0, 0) //scroll to top
  }, [])
  



  useEffect(() => {
    if (error) {
      alert.error(error); 
       dispatch(clearErrors());
    }

     dispatch(getProduct());
  }, [dispatch, error, alert]);

    return (
      
      <Fragment>
      {loading ? <Loader/> : (

        <Fragment style={{ position: 'static'}}>
      

        <Box className="brand">
        <h1 className="headingone">SHOP BY BRANDS</h1>
        <Box className="wrapper">
          {
            imageURL1.map(image => (
              <img src={image} style={{ width: '5%' }} />
            ))
          }
        </Box>
      </Box>


      {/* Nav Bar */}
      <div className="vavbar ">
        <ul>
          <li className="Formal" >
            <Link to='/products/Formal Shoe' onClick={() => setmark("Formal")}>
              <p>Formal shoe</p>
              <i className=' activeIcon'></i>
              <div className={`${mark === "Formal" && 'indicator active'}`}  >  </div>

            </Link>
          </li>

          <li className="Casual">
            <Link to='/products/Boot' onClick={() => setmark("Casual")}>
              <p>Boots</p>
              <i className=' activeIcon'></i>
              <div className={`${mark === "Casual" && 'indicator'}`}  >  </div>
            </Link>
          </li>

          <li className="Sport">
            <Link to='/products/Sport Shoe' onClick={() => setmark("Sport")}>
              <p>Sport Shoe</p>
              <i className=' activeIcon'></i>
              <div className={`${mark === "Sport" && 'indicator'}`}  >  </div>

            </Link>
          </li>

          <li className="Slippers">
            <Link to='/products/Slippers' onClick={() => setmark("Slippers")}>
              <p>Slippers</p>
              <i className=' activeIcon'></i>
              <div className={`${mark === "Slippers" && 'indicator'}`}  >  </div>

            </Link>
          </li>

          <li className="Loafers">
            <Link to='/products/Casual Shoe' onClick={() => setmark("Loafers")}>
              <p>Casual Shoe</p>
              <i className=' activeIcon'></i>
              <div className={`${mark === "Loafers" && 'indicator'}`}  >  </div>

            </Link>
          </li>

          <li className="Floaters">
            <Link to='/products/Sandals' onClick={() => setmark("Floaters")}>
              <p>Sandals</p>
              <i className=' activeIcon'></i>
              <div className={`${mark === "Floaters" && 'indicator'}`}  >  </div>

            </Link>
          </li>

          <li className="Boots">
            <Link to='/products/Loafers' onClick={() => setmark("Boots")}>
              <p>Loafers</p>
              <i className=' activeIcon'></i>
              <div className={`${mark === "Boots" && 'indicator'}`}  >  </div>

            </Link>
          </li>


        </ul>
      </div>

{/* 
      <div className="buttons">
        <a className="button" href="#">Boots</a>
        <a className="button two" href="#">Loafers</a>
        <a className="button" href="#">Slippers</a>
        <a className="button two" href="#">Sandals</a>
        <a className="button" href="#">Sport Shoe</a>
        <a className="button two" href="#">Casual Shoe</a>
        <a className="button two" href="#">Formal shoe</a>
      </div>
 */}

      <div class="icons">
      
      <a href="#" className="fb"  style={{marginRight:"60%",marginLeft:"10px"}} ><img src="./images/filters.png"/>FILTERS</a>
      <a href="#" className="git"><img src="./images/sort-ascending.png"/>SORT</a>
      
    </div>

        
      <h2 className="homeHeading">Products</h2>
      <div className="container" id="container">
      {products &&
        products.map((product) => (

          (product.category===music)
          ? (<ProductCard key={product._id} product={product} />)
          : null
           ))}
      
      </div>

      
    </Fragment>
      )}
    </Fragment>
     
    );
};

export default CategoryCard;