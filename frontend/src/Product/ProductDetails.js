import React, { Fragment, useEffect,useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { Box } from '@material-ui/core';
import Deal from '../Header/Deal.jsx';
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../actions/productAction";
import Loader from "../layout/Loader/Loader";
import { Rating } from "@material-ui/lab";
import { ReviewCard } from "./ReviewCard.js";
import {
  //Dialog,
  // DialogActions,
  //DialogContent,
  //DialogTitle,
  //Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { NEW_REVIEW_RESET } from "../constants/productConstants";

import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../actions/cartAction";
import { mobile } from "../Header/responsive";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import '../Home/Home.css'






const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [selectedColor, setselectedColor] = useState("blue");

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

    const { success, error: reviewError } = useSelector(
     (state) => state.newReview
   ); 

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

     const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
  
    const increaseQuantity = () => {
      if (product.Stock <= quantity) return;
  
      const qty = quantity + 1;
      setQuantity(qty);
    };
  
    const decreaseQuantity = () => {
      if (1 >= quantity) return;
  
      const qty = quantity - 1;
      setQuantity(qty);
    }; 

   const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id, quantity));
    alert.success("Item Added To Cart");
  }; 

   const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  }; 

  useEffect(() => {
    window.scrollTo(0, 0) //scroll to top
  }, [])

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }


     if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    } 

     if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    } 
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError ]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${product.name} -- ECOMMERCE`} />
          <div className="ProductDetails">
      
            <div>
      
              <Carousel >
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"

                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
              <div >
              <ul style={{display:"flex",listStyle:"none",padding:"10px",cursor:"pointer"}}>
              <li style={{margin:"4px"}}><img src="https://i.postimg.cc/sg4kVCyD/blue.jpg" alt="a1" style={{height:"60px",width:"auto"}}/></li>
              <li style={{margin:"4px"}}><img src="https://i.postimg.cc/sg4kVCyD/blue.jpg" alt="a1" style={{height:"60px",width:"auto"}}/></li>
              <li style={{margin:"4px"}}><img src="https://i.postimg.cc/sg4kVCyD/blue.jpg" alt="a1" style={{height:"60px",width:"auto"}}/></li>
              <li style={{margin:"4px"}}><img src="https://i.postimg.cc/sg4kVCyD/blue.jpg" alt="a1" style={{height:"60px",width:"auto"}}/></li>
            

          
             
            
             
             
             
              </ul>
              </div>
              <div >
              <a href={product.link} target="_blank">
                <button className="submitReview">Add to Cart</button></a>

              <a href={product.link} target="_blank">
                <button className="submitReview">BUY NOW</button></a>
                </div>
            </div>


            <div>
              <div className="detailsBlock-1">
                <h2>{product.name}</h2>
                <p style={{ fontSize: "0.9rem" }}>Product SKU # {product._id}</p>
              </div>

              <div className="detailsBlock-3">
                <p>
                  <h1>{`₹${product.price}`}</h1>
                  M.R.P:<del> ₹ 1299.00</del><br /><br />
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b><br /><br />
                  Sold by <span style={{ color: "dodgerblue" }}>Sindh Boot House</span>.
                </p>

                
                <div className="detailsBlock-3-1-1">
                <button onClick={decreaseQuantity}>-</button>
                <input readOnly type="number" value={quantity} />
                <button onClick={increaseQuantity}>+</button>
              </div>                <br />

              </div>

              <div className="detailsBlock-4">

                <p style={{ fontSize: "14px" }}> <span style={{ fontFamily: "Arial", fontWeight: "bold", color: "black", paddingRight: "1.7em" }}>Brand </span> <span style={{ color: "black" }}>{product.brand}</span></p>
                <br />
                <p style={{ fontSize: "14px" }}> <span style={{ fontFamily: "Arial", fontWeight: "bold", color: "black", paddingRight: "1.7em" }}>Inner Material </span> <span style={{ color: "black" }}>{product.material}</span></p>
                <br />
                <p style={{ fontSize: "14px" }}> <span style={{ fontFamily: "Arial", fontWeight: "bold", color: "black", paddingRight: "1.7em" }}>Outer Material </span> <span style={{ color: "black" }}>{product.weight}</span></p>
                <br />
                <p style={{ fontSize: "14px" }}> <span style={{ fontFamily: "Arial", fontWeight: "bold", color: "black", paddingRight: "1.7em" }}>Ocassion </span> <span style={{ color: "black" }}>{product.point1}</span></p>
                <br />

                

                <div>

                
                <div className="color-option">
                <h3 className="title">colour</h3>
                <div className="circles">
               
                 <span className={`circle blue ${selectedColor === "blue" && "active"}`} id="blue" onClick={() => setselectedColor("blue")}></span>
                  <span className={`circle pink ${selectedColor === "pink" && "active"}`} id="pink" onClick={() => setselectedColor("pink")}></span>
                  <span className={`circle yellow ${selectedColor === "yellow" && "active"}`} id="yellow" onClick={() => setselectedColor("yellow")}></span>
                </div>
              </div>
               
      
      
      <br/>
               
      
      
      
                  
              
                  
                </div>
                <div className="size-container">
                <h3 className="title">size</h3>
                <div className="sizes">
                    <span id="a"  className={`size ${size === "a" && "active"}`} onClick={()=> setSize("a")} >7</span>
                    <span id="b"  className={`size ${size === "b" && "active"}`} onClick={()=> setSize("b")}>8</span>
                    <span id="c"  className={`size ${size === "c" && "active"}`} onClick={()=> setSize("c")}>9</span>
                    <span id="d"  className={`size ${size === "d" && "active"}`} onClick={()=> setSize("d")}>10</span>
                    <span id="e"  className={`size ${size === "e" && "active"}`} onClick={()=> setSize("e")}>11</span>
                </div>
            </div>
                <div >



                <button
                disabled={product.Stock < 1 ? true : false}
                onClick={addToCartHandler}
                className="buttons1"
              >
                Add to Cart
              </button>
                  <Link  style={{textDecoration: 'none' }} to={`/cart`}>
                  <button className="buttons1">BUY NOW</button></Link>
                  </div>
              </div>
            </div>
          </div>



          <div>
            <h6 style={{ lineHeight: "40px", color: "#000", marginLeft: "1em", fontWeight: "bold" }}>Product description:</h6>
            <p style={{ fontSize: "small", lineHeight: "20px", margin: " 0em 5em 0em 45px", fontFamily: "Arial,sans-serif" }}>{product.description3}</p>
          </div>
          <hr style={{ width: "90%", marginLeft: "2.5%", marginTop: "1rem" }} />

          <Box style={{ display: 'flex' }}>
            <Box style={{ width: '100vw' }}>
              <Deal

                title="Top Selling Products"
              />
            </Box>
          </Box>


        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;


