import React, { useEffect, Fragment } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import ProductCard from "./ProductCard.jsx"
import MetaData from "../layout/MetaData"
import { getProduct,clearErrors ,getProductByCategory} from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";

const Home = ({ match,...props }) => {
  const alert = useAlert();
   const dispatch = useDispatch();
   const {loading,error,products} = useSelector(
     (state) => state.products
   );


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
      <MetaData title="Vandana Handicraft" />

      <h2 className="homeHeading">Products</h2>
      <div className="container" id="container">
      {products &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      
      </div>
    </Fragment>
      )}
    </Fragment>
  );
};

export default Home;