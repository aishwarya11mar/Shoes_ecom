import HomeBar from './Header/Homebar.jsx';
import MidBar from './Header/Midbar.jsx';
import LoginSignUp from './Header/LoginSignUp.jsx';
import Contact from './Footer/Contact.jsx';
import Subscribe from './Footer/Subscribe.jsx';
import Review from './Footer/Review.jsx';
import Faq from './Footer/Faq.jsx';
import TermsAndCondition from './Footer/TermsAndCondition.jsx';
import Privacy from './Footer/Privacy.jsx';
import Shipping1 from './Footer/Shipping1.jsx';
import ProductDetails from './Product/ProductDetails.js';
import Products from './Product/Products.js';
import CategoryCard from './Product/CategoryCard.js';
import Search from './Product/Search.js';
import Loader from './layout/Loader/Loader.js';
import axios from "axios";

import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./layout/UserOptions";
import NotFound from "./layout/Not Found/NotFound.js"; 
import { useSelector } from "react-redux";
import Profile from "./User/Profile";
import ProtectedRoute from "./Route/ProtectedRoute";
import UpdateProfile from "./User/UpdateProfile.js";
import UpdatePassword from "./User/UpdatePassword.js";
import ForgotPassword from "./User/ForgotPassword.js";
import ResetPassword from "./User/ResetPassword.js";
import Dashboard from "./admin/Dashboard.js";
import ProductList from "./admin/ProductList.js";
import NewProduct from "./admin/NewProduct.js";
import UpdateProduct from "./admin/UpdateProduct.js";
import UsersList from "./admin/UsersList.js";
import UpdateUser from "./admin/UpdateUser.js"; 
import Home from './Home/Home.jsx';
import './App.css';
import { useEffect, useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from "webfontloader";
import Contactus from './Header/Contactus.jsx';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {categories} from './Header/data';
import Cart from "./Cart/Cart";
import Shipping from "./Cart/Shipping";
import ConfirmOrder from "./Cart/ConfirmOrder";
import Payment from "./Cart/Payment";
import OrderSuccess from "./Cart/OrderSuccess";
import MyOrders from "./Order/MyOrders";
import OrderDetails from "./Order/OrderDetails";
import OrderList from "./admin/OrderList";
import ProcessOrder from "./admin/ProcessOrder";
import ProductReviews from "./admin/ProductReviews";


function App({product}) {

   const { isAuthenticated, user } = useSelector((state) => state.user);  



useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

 
  }, []); 

  useEffect(() => {
    window.scrollTo(0, 0)  
    //scroll to top
  }, []);

 {/*  window.addEventListener("contextmenu", (e) => e.preventDefault()); */}//for not allowing anyone to inspect


  return (
    <Router>
      <HomeBar /> 
       {isAuthenticated && <UserOptions user={user} />  }
      
 <Switch>
 <Route exact path="/" component={MidBar} />
 <Route exact path="/product/:id" component={ProductDetails} />
 <Route exact path="/products" component={Products} />

 <Route exact path="/products/Boot">
 <CategoryCard music={"Boot"}/> </Route>

 <Route exact path="/products/Formal Shoe">
 <CategoryCard music={"Formal Shoe"}/> </Route>

 <Route exact path="/products/Sandals">
 <CategoryCard music={"Sandals"}/> </Route>

 <Route exact path="/products/Loafers">
 <CategoryCard music={"Loafers"}/> </Route>

 <Route exact path="/products/Casual Shoe">
 <CategoryCard music={"Casual Shoe"}/> </Route>

 <Route exact path="/products/Slippers">
 <CategoryCard music={"Slippers"}/> </Route>

 <Route exact path="/products/Sport Shoe">
 <CategoryCard music={"Sport Shoe"}/> </Route>
 
 <ProtectedRoute exact path="/account" component={Profile} />
 
 <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
 <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
 <Route exact path="/password/forgot" component={ForgotPassword} />
 <Route exact path="/password/reset/:token" component={ResetPassword} />
 
 <Route exact path="/search" component={Search} />
<Route  path="/login" component={LoginSignUp} /> 
 <Route exact path="/Privacy" component={Privacy} />
 <Route exact path="/Faq" component={Faq} />
 <Route exact path="/Contactus" component={Contactus} />
 <Route exact path="/TermsAndCondition" component={TermsAndCondition} />

 <Route exact path="/Shipping1" component={Shipping1} />

 <Route exact path="/cart" component={Cart} />

 <ProtectedRoute exact path="/shipping" component={Shipping} />

 <ProtectedRoute exact path="/success" component={OrderSuccess} />

 <ProtectedRoute exact path="/orders" component={MyOrders} />

 <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

 <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

 <ProtectedRoute
 isAdmin={true}
 exact
 path="/admin/dashboard"
 component={Dashboard}
/>
<ProtectedRoute
 exact
 path="/admin/products"
 isAdmin={true}
 component={ProductList}
/>
<ProtectedRoute
 exact
 path="/admin/product"
 isAdmin={true}
 component={NewProduct}
/>

<ProtectedRoute
 exact
 path="/admin/product/:id"
 isAdmin={true}
 component={UpdateProduct}
/>
<ProtectedRoute
 exact
 path="/admin/orders"
 isAdmin={true}
 component={OrderList}
/>

<ProtectedRoute
 exact
 path="/admin/order/:id"
 isAdmin={true}
 component={ProcessOrder}
/>
<ProtectedRoute
 exact
 path="/admin/users"
 isAdmin={true}
 component={UsersList}
/>

<ProtectedRoute
 exact
 path="/admin/user/:id"
 isAdmin={true}
 component={UpdateUser}
/>

<ProtectedRoute
 exact
 path="/admin/reviews"
 isAdmin={true}
 component={ProductReviews}
/>

      </Switch>


      <Review/>
     
        
    </Router>
  );
}

export default App;