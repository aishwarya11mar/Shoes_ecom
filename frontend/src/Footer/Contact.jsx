import React from "react";


import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart,faUserCircle } from '@fortawesome/free-regular-svg-icons';
//import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Faq from "./Faq.jsx";

import Shipping1 from "./Shipping1.jsx";

import Privacy from "./Privacy.jsx";
import TermsAndCondition from "./TermsAndCondition.jsx";

import "./Contact.css";



const Footer = () => {
  return (
    <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">Sindh Boot House</span>
        </div>
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li className="link_name"><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Get started</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Shoe Types</li>
          <li><a href="#">Casual Shoe</a></li>
          <li><a href="#">Formal Shoe</a></li>
          <li><a href="#">Running Shoe</a></li>
          <li><a href="#">Loafers</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">My account</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Purchase</a></li>
        </ul>
        <ul className="box" style={{position:"static"}}>
          <li className="link_name" >HELP</li>
          <li style={{overflow:"hidden"}}><Link to="/">Return Policy</Link></li>
          <li><a href="/">Payments</a></li>
          <li><a href="/Faq">FAQs</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text" >Copyright © 2022 <a href="#"> SBH </a>All rights reserved</span>
     {/*    <span className="policy_terms">
          <a href="#Faq">Faq</a>
          <a href="#">Terms & condition</a>
        </span> */}
      </div>
    </div> 
  </footer>

  );
};

export default Footer;