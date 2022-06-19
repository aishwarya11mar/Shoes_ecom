import React from 'react';
import { Alert, Form, Button, Card, Row, Col, Container } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart,faUserCircle } from '@fortawesome/free-regular-svg-icons';
//import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import styles from '../App.css';


const Copyright = () => {
  return (

    <div>
      <div className="row  " style={{ height: "28px", background:"linear-gradient(to bottom, black,#383838)", color:"white" }}>
        <div >
          <p style={{ fontSize: "10px", justifyContent: " center", display: "flex" }}>Copyright © 2022  Sindh Boot House All Rights
            Reserved
          </p>
        </div>
      </div>

    </div>

  );
};

export default Copyright;
