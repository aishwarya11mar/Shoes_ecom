import React ,{Component} from 'react';
import { Carousel  } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faHeart,faUserCircle } from '@fortawesome/free-regular-svg-icons';
//import { faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//import { Link } from "react-router-dom";
//import styles from '../App.css';
//import '../main.js';


class Deal extends Component {

  componentDidMount (){

    
    let daysItem = document.querySelector("#days");
    let hoursItem = document.querySelector("#hours");
    let minItem = document.querySelector("#min");
    let secItem = document.querySelector("#sec");
    
    let countDown = () => {
        let futureDate = new Date("30 December 2022");
        let currentDate = new Date();
        let myDate = futureDate - currentDate;
    
        let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
        let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
        let min = Math.floor(myDate / 1000 / 60) % 60;
        let sec = Math.floor(myDate / 1000) % 60;
    
        daysItem.innerHTML = days;
        hoursItem.innerHTML = hours;
        minItem.innerHTML = min;
        secItem.innerHTML = sec;
    }
    
    countDown()
    setInterval(countDown, 1000)                   
    let navBar = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse.collapse');
    navBar.forEach(function(a){
        a.addEventListener("click", function(){
            navCollapse.classList.remove("show");
        })
    })

  }
     
render()
    {
      return(


       <div >
        
        <section id="special" className="special">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headline text-center mb-5">
                <h2 className="pb-3 position-relative d-inline-block">Deal of the Day</h2>
              </div>
            </div>

            <div className="col-sm-12 col-lg-7 text-center text-lg-start">
              <div className="countdown-container">
                <h2 className="text-uppercase">classNamey Trendy Lord Buddha Idols</h2>
                <p className="my-4">The peaceful expression and graceful figure of the Buddha statue that he made completed
                  a Japanese style of sculpture of Buddha statues called "Jōchō yō". </p>
                <ul className="list-unstyled countdown-counter">
                  <li><span className="fs-1 d-block" id="days">00</span> Days</li>
                  <li><span className="fs-1 d-block" id="hours">00</span> Hr</li>
                  <li><span className="fs-1 d-block" id="min">00</span> Min</li>
                  <li><span className="fs-1 d-block" id="sec">00</span> Sec</li>
                </ul>
                <span className="countdown-price h3 d-block mb-4">Rs. 420 <del>Rs. 670</del></span>
                <a href="https://www.amazon.in/Crafonic-Buddha-showpiece-Finishing-9cm%C3%977cm%C3%9717cm/dp/B09WK8WVSB/ref=sr_1_22?crid=ZBR7T015KXZH&keywords=crafonic&qid=1653757889&sprefix=crafonic+%2Caps%2C498&sr=8-22"><button type="button" className="btn btn-danger" style={{marginBottom:"10px"}}>BUY NOW</button></a>
              </div>
            </div>



            <div className="col-sm-12 col-lg-5">
            <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/p6.jpg"
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/p8.jpg"
                alt="Second slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/p7.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </div>
      </section>
  
        </div>

    );
  }
};

export default Deal;