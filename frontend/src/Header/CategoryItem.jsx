import { Link } from "react-router-dom";
import React, {useEffect,Fragment,useState} from "react"
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item,history ,product}) => {

  const [category, setcategory] = useState("");
  
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (category) {
      history.push(`/products/${category}`);
    } else {
      history.push("/products");
    }
  };



  return (
    <Container>
    
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => {
          setcategory(item.cat);
        }} > <Link to={`/products/${item.cat}` } >SHOP NOW</Link></Button> 
      </Info>
   
    </Container>
   
  );
};

export default CategoryItem;

