import React, { Component ,useState} from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
/* import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";*/
import LoginSignUp from "./LoginSignUp.jsx"; 
import "./Homebar.css";
import logo1 from "../logo1.png";
import { Link} from "react-router-dom";








const HomeBar = ({ history }) => {

    const [modalOpen, setModalOpen] = useState(false);

/* 
        // search-box open close js code
        let navbar = document.querySelector(".navbar");
        let searchBox = document.querySelector(".search-box .bx-search");
        // let searchBoxCancel = document.querySelector(".search-box .bx-x");

        searchBox.addEventListener("click", () => {
            navbar.classList.toggle("showInput");
            if (navbar.classList.contains("showInput")) {
                searchBox.classList.replace("bx-search", "bx-x");
            } else {
                searchBox.classList.replace("bx-x", "bx-search");
            }
        });

        // sidebar open close js code
        let navLinks = document.querySelector(".nav-links");
        let menuOpenBtn = document.querySelector(".navbar .bx-menu");
        let menuCloseBtn = document.querySelector(".nav-links .bx-x");
        menuOpenBtn.onclick = function () {
            navLinks.style.left = "0";
        }
        menuCloseBtn.onclick = function () {
            navLinks.style.left = "-100%";
        }


        // sidebar submenu open close js code
        let htmlcssArrow = document.querySelector(".htmlcss-arrow");
        htmlcssArrow.onclick = function () {
            navLinks.classList.toggle("show1");
        }
        let moreArrow = document.querySelector(".more-arrow");
        moreArrow.onclick = function () {
            navLinks.classList.toggle("show2");
        }
        let jsArrow = document.querySelector(".js-arrow");
        jsArrow.onclick = function () {
            navLinks.classList.toggle("show3");
        }


    

     { */

        const [keyword, setKeyword] = useState("");

        const searchSubmitHandler = (e) => {
          e.preventDefault();
          if (keyword.trim()) {
            history.push(`/products/${keyword}`);
          } else {
            history.push("/products");
          }
        };
        return (
            <nav>
                <div className="navbar">
                    <i className='bx bx-menu'></i>
                    <img className="z" src={logo1} alt="SBH Logo" />
                    <div className="nav-links">
                        <div className="sidebar-logo">
                            <span className="logo-name">Sindh Boot House</span>
                            <i className='bx bx-x' ></i>
                        </div>
                        <ul className="links">
                            <li><a href="/">HOME</a></li>
                            <li><a href="/products">PRODUCTS</a></li>
                            <li>
                                <a href="#">CATEGORIES</a>
                                <i className='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
                                <ul className="htmlCss-sub-menu sub-menu" >
                                    <li><Link to="/products/Formal Shoe">Formal Shoes</Link></li>
                                    <li><Link to="/products/Casual Shoe">Casual Shoes</Link></li>
                                    <li><Link to="/products/Sport Shoe">Sports Shoes</Link></li>
                                    <li><Link to="/products/Boot">Boots</Link></li>
                                    <li><Link to="/products/Sandals">Sandals & Floaters</Link></li>
                                    <li><Link to="/products/Slippers">Slippers & more</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <a href="#" >BRANDS</a>
                                <i className="bx bxs-chevron-down js-arrow arrow"></i>
                                <ul className="js-sub-menu sub-menu" >
                                    <li><a href="#">Campus</a></li>
                                    <li><a href="#">Action </a></li>
                                    <li><a href="#">Bata</a></li>
                                    <li><a href="#">Sparx</a></li>
                                    <li><a href="#">Relaxo </a></li>
                                    <li className="more">
                                        <span><a href="#">More</a>
                                            <i className="bx bxs-chevron-right arrow more-arrow"></i>
                                        </span>
                                        <ul className="more-sub-menu sub-menu">
                                            <li><a href="#">Lancer</a></li>
                                            <li><a href="#">Flite</a></li>
                                            <li><a href="#">Reebook</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li><a href="/Contactus">CONTACT US</a></li>
                        </ul>
                    </div>

                 {/*    <div className="search-box" > <button
                    className="openModalBtn"
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    Open
                  </button>
                   </div> */}
                   
                   <div className="search-box"> <Link  to='/login' ><i className='bx bx-user a ' ></i></Link></div>

                    <div className="search-box">
                        
                        <i className='bx bx-search'></i>
                        <div className="input-box">
                            <input type="text" placeholder="Search..."  onChange={(e) => setKeyword(e.target.value)}/>
                        </div>
                    </div>
                </div>
                {modalOpen && <LoginSignUp setOpenModal={setModalOpen} />}
            </nav>
           


        );
    
};


export default HomeBar;
