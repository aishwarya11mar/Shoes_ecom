import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Faq.css";
import image from '../image.png';

class Faq extends Component {

  componentDidMount() {
    let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e) => {
        let clickedLi;
        if (e.target.classList.contains("question-arrow")) {
          clickedLi = e.target.parentElement;
        } else {
          clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
      });
    }
  }
  render() {
    return (
      <div className="sody">
        <div className="accordion">
          <div className="image-box">
            <img src={image} alt="Accordion Image" />
          </div>
          <div className="accordion-text">
            <div className="title">FAQ</div>
            <ul className="faq-text">
              <li>
                <div className="question-arrow">
                  <span className="question">What do you mean by HTML & CSS?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, doloribus.</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">What do you mean by JavaScript?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">From where you learned HTML & CSS?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, necessitatibus.</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">Which code editor do you use?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, labore.</p>
                <span className="line"></span>
              </li>
              <li>
                <div className="question-arrow">
                  <span className="question">Software you use for video editing?</span>
                  <i className="bx bxs-chevron-down arrow"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandae!</p>
                <span className="line"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
};
export default Faq;