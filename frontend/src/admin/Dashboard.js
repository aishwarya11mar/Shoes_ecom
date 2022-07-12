import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import ProductList from "./ProductList.js";
import Footer from "../Footer/Contact.jsx";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
//import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../actions/productAction";

import { getAllUsers } from "../actions/userAction.js";
//import MetaData from "../layout/MetaData";
import { logout } from "../actions/userAction";

//import React, { useEffect } from "react";
//import Sidebar from "./Sidebar.js";
//import "./dashboard.css";
//import { Typography } from "@material-ui/core";


import { getAllOrders } from "../actions/orderAction.js";

import MetaData from "../layout/MetaData";


const Dashboard = () => {
  /*  const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
    modeText.innerText = "Light mode";
}else{
    modeText.innerText = "Dark mode";
    
}
}); */

const dispatch = useDispatch();

const { products } = useSelector((state) => state.products);

const { orders } = useSelector((state) => state.allOrders);

const { users } = useSelector((state) => state.allUsers);

let outOfStock = 0;

products &&
  products.forEach((item) => {
    if (item.Stock === 0) {
      outOfStock += 1;
    }
  });

useEffect(() => {
  dispatch(getAdminProduct());
  dispatch(getAllOrders());
  dispatch(getAllUsers());
}, [dispatch]);

let totalAmount = 0;
orders &&
  orders.forEach((item) => {
    totalAmount += item.totalPrice;
  });
  /* const doughnutState = {
  labels: ["Out of Stock", "InStock"],
  datasets: [
    {
      backgroundColor: ["#00A6B4", "#6800B4"],
      hoverBackgroundColor: ["#4B5000", "#35014F"],
      data: [2,4],
    },
  ],
}; */
function logoutUser() {
  dispatch(logout());
  alert.success("Logout Successfully");
}


  return (
    
   

 <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

      
      </div>
  
    </div>
    
    
  );
};

export default Dashboard;
