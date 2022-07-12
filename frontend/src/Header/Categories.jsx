import { Link } from "react-router-dom";
import styles from '../App.css';
import React from 'react';


const Categories = () => {

    return (
        <div >
            <section id="products" className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="headline text-center mb-5">
                                <h2 className="pb-3 position-relative d-inline-block">CATEGORIES</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <Link to="/products/Formal shoe" className="d-block text-center mb-4">
                                <div className="product-list">
                                    <div className="product-image position-relative">

                                        <img src="images/fs1.jpg" alt="products" className="img-fluid product-image-first" style={{ borderRadius: "10px" }} />
                                        <img src="images/FS2.jpg" alt="products" className="img-fluid product-image-secondary" style={{ borderRadius: "10px" }} />
                                        <span><h3 className="text-capitalize male">FORMAL SHOES</h3></span>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <Link to="/products/Casual shoe" className="d-block text-center mb-4">
                                <div className="product-list">
                                    <div className="product-image position-relative">
                                        <img src="images/CS2.jpg" alt="products" className="img-fluid product-image-first" style={{ borderRadius: "10px" }} />
                                        <img src="images/cs3.jpg" alt="products" className="img-fluid product-image-secondary" style={{ borderRadius: "10px" }} />
                                        <span><h3 className="male">Casual Shoes</h3></span>
                                    </div>
                                    
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <Link to="/products/Sport shoe" className="d-block text-center mb-4">
                                <div className="product-list">
                                    <div className="product-image position-relative">
                                        <img src="images/ss3.jpg" alt="products" className="img-fluid product-image-first" style={{ borderRadius: "10px" }} />
                                        <img src="images/ss2.jpg" alt="products" className="img-fluid product-image-secondary" style={{ borderRadius: "10px" }} />
                                        <span><h3 className="male">Sports Shoes</h3></span>
                                    </div>
                                    
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <Link to="/products/Sandals" className="d-block text-center mb-4">
                                <div className="product-list">
                                    <div className="product-image position-relative">
                                        <img src="images/sand1.jpg" alt="products" className="img-fluid product-image-first" style={{ borderRadius: "10px" }} />
                                        <img src="images/sand2.jpg" alt="products" className="img-fluid product-image-secondary" style={{ borderRadius: "10px" }} />
                                        <span><h3 className="male1">Sandals & Flotters</h3></span>
                                    </div>
                                   
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <Link to="/products/Slippers" className="d-block text-center mb-4">
                                <div className="product-list">
                                    <div className="product-image position-relative">
                                        <img src="images/sl1.jpg" alt="products" className="img-fluid product-image-first" style={{ borderRadius: "10px" }} />
                                        <img src="images/sl2.jpg" alt="products" className="img-fluid product-image-secondary" style={{ borderRadius: "10px" }} />
                                        <span><h3 className="male1">Slippers & Flip Flops</h3></span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <Link to="/products/Boot" className="d-block text-center mb-4">
                                <div className="product-list">
                                    <div className="product-image position-relative">
                                        <img src="images/BS2.jpg" alt="products" className="img-fluid product-image-first" style={{ borderRadius: "10px" }} />
                                        <img src="images/bs1.jpeg" alt="products" className="img-fluid product-image-secondary" style={{ borderRadius: "10px" }} />
                                        <span><h3 className="male2">Boots</h3></span>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Categories;