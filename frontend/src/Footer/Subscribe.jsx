import React, { Fragment, useState, useEffect } from "react";
/* import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  Alert,
  Form,
  Button,
  Card,
  Row,
  Col,
  Container,
} from "react-bootstrap"; */
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart,faUserCircle } from '@fortawesome/free-regular-svg-icons';
//import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, subscribeMail } from "../actions/userAction";
import styles from "../App.css";
import Loader from "../layout/Loader/Loader";
const Subscribe = () => {


  /* const dispatch = useDispatch();
  const alert = useAlert();

  const { error, message, loading } = useSelector(
    (state) => state.subscribeMail
  );

  const [email, setEmail] = useState("");

  const subscribeMailSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(subscribeMail(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      alert.success(message);
    }
  }, [dispatch, error, alert, message]);
 */


  return (



    <div>

      {/*  <Fragment>
    {loading ? (
      <Loader />
    ) : (  */}


      <Fragment>
        <section className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="single">
                  <h2>Subscribe to our Newsletter</h2>
                </div>
              </div>
              <div className="input-group single">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                /* value={email}
                onChange={(e) => setEmail(e.target.value)} */
                />
                <form className="input-group-btn" /* onSubmit={subscribeMailSubmit} */>
                  <button className="btn btn-theme" type="submit"  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
      {/* )}
  </Fragment>  */}

      
    </div>
  );
};

export default Subscribe;