import React from 'react';
import { Alert, Form, Button, Card,Row,Col,Container } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart,faUserCircle } from '@fortawesome/free-regular-svg-icons';
//import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//import Diyas from '../Pages/Page1/Diyas.jsx';
import {  Link} from "react-router-dom";
import styles from '../App.css';


const FeaturedProducts = () => {
    return(

        <div >
        <section id="products" className="products">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headline text-center mb-5">
                <h2 className="pb-3 position-relative d-inline-block">FEATURED PRODUCTS</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <Link href="/Diyas" className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <span className="sale">Sale</span>
                    <img src="images/p15.jpg" alt="products" className="img-fluid product-image-first"/>
                    <img src="images/p17.jpg" alt="products" className="img-fluid product-image-secondary"/>
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">Floral Indian Green: Reusable Hand Printed Copper Bottle, 1 L</h3>
                    <p className="mb-0 amount">Rs. 400<del>RS. 580</del></p>
                    <div className="py-1">
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                    </div>
                    <button type="button" className="add_to_Card">ADD TO CART</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="/" className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img src="images/p4.jpg" alt="products" className="img-fluid product-image-first"/>
                    <img src="images/p3.jpg" alt="products" className="img-fluid product-image-secondary"/>
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">Metal Flower Vase</h3>
                    <p className="mb-0 amount">Rs. 300</p>
                    <div className="py-1">
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                    </div>
                    <button type="button" className="add_to_Card">ADD TO CART</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="/" className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img src="images/p5.jpg" alt="products" className="img-fluid product-image-first"/>
                    <img src="images/p14.jpg" alt="products" className="img-fluid product-image-secondary"/>
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      Clay Vase Earthen Pot With Traditional Artwork</h3>
                    <p className="mb-0 amount">Rs. 600</p>
                    <div className="py-1">
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                    </div>
                    <button type="button" className="add_to_Card">ADD TO CART</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="/" className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img src="images/p9.jpg" alt="products" className="img-fluid product-image-first"/>
                    <img src="images/p8.jpg" alt="products" className="img-fluid product-image-secondary"/>
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">Elegant Ceramic Vase</h3>
                    <p className="mb-0 amount">Rs. 500</p>
                    <div className="py-1">
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                    </div>
                    <button type="button" className="add_to_Card">ADD TO CART</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="/" className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <span className="sale">Sale</span>
                    <img src="images/p11.jpg" alt="products" className="img-fluid product-image-first"/>
                    <img src="images/p16.jpg" alt="products" className="img-fluid product-image-secondary"/>
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">Home Decor White Marble Handicraft Art</h3>
                    <p className="mb-0 amount">Rs. 600</p>
                    <div className="py-1">
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star"></span>
                      <span className="ti-star"></span>
                    </div>
                    <button type="button" className="add_to_Card">ADD TO CART</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="/" className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img src="images/p12.jpg" alt="products" className="img-fluid product-image-first"/>
                    <img src="images/p18.jpg" alt="products" className="img-fluid product-image-secondary"/>
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">Ceramic Art </h3>
                    <p className="mb-0 amount">Rs. 500</p>
                    <div className="py-1">
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star active"></span>
                      <span className="ti-star"></span>
                    </div>
                    <button type="button" className="add_to_Card">ADD TO CART</button>
                  </div>
                </div>
              </a>
            </div>
          </div>
         
      </div>
    </section>
        </div>


    );
};

export default FeaturedProducts;
