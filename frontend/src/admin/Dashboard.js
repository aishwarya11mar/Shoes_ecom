import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
//import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../actions/productAction";

import { getAllUsers } from "../actions/userAction.js";
//import MetaData from "../layout/MetaData";


const Dashboard = () => {
 

  const dispatch = useDispatch();

    
  
    const {  products } = useSelector((state) => state.products);
    const { users } = useSelector((state) => state.allUsers);
    //let outOfStock = 0;

 /*  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    }); */

    useEffect(() => {
     
      dispatch(getAdminProduct());
      dispatch(getAllUsers());
    }, [dispatch]);
    

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

  return (
    <div className="dashboard" >
     <Sidebar/>
     <div className="dashboardContainer">
      <Typography component="h1">Dashboard</Typography>


      <div className="dashboardSummary">
      <div>
        <p>
          Total Amount <br /> ₹2000
        </p>
      </div>
      <div className="dashboardSummaryBox2">
        <Link to="/admin/products">
          <p>Product</p>
          <p>{products && products.length}</p>
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