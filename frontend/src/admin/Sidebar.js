import React, { useEffect, useState } from "react";
import "./sidebar.css";
//import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { logout } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux";


const Sidebar = () => {

  const [side, setside] = useState(true);
  console.log(side);

  const onToggleSidebar = () => {
    setside(!side);
};
  const dispatch = useDispatch();
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  return (
    <div  className="a" >

    
      <nav className= {`sidebar  ${side === true && "close" }`} onClick={() => {onToggleSidebar()}}>
      
        <header>
       
          
          <i
            className="bx bx-chevron-right toggle " ></i>
          

        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

           
              <li className="search-box">
                
                  <i className="bx bx-home-alt icon"></i>
                  <Link to="/admin/dashboard">
                  <span className="text nav-text">Dashboard </span>
                </Link>
              </li>

              <li className="search-box">
                
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <Link to="/admin/products">
                  <span className="text nav-text">All Products</span>
                </Link>
              </li>

              <li className="search-box">
               
                  <i className="bx bx-bell icon"></i>
                  <Link to="/admin/product">
                  <span className="text nav-text">Create Product</span>
                </Link>
              </li>

              <li className="search-box">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <Link to="/admin/orders">
                  <span className="text nav-text">Orders</span>
                </Link>
              </li>

              <li className="search-box">
                  <i className="bx bx-heart icon"></i>
                  <Link to="/admin/users">
                  <span className="text nav-text">Users</span>
                </Link>
              </li>

              <li className="search-box">
                  <i className="bx bx-wallet icon"></i>
                  <Link to="/">
                  <span className="text nav-text">Home</span>
                </Link>
              </li>
            
          </div>

          <div className="bottom-content">
            <li className="" onClick={()=>logoutUser()}>
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      

    
    </div>
  );
};

export default Sidebar;
