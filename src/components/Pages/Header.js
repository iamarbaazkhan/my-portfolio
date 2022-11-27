import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const header = (props) => (
  <header className="masthead">
    <div className="container">
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <div className="masthead-subheading">Hello, I'm Arbaaz</div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
        <div className="masthead-heading">Front-end Web developer</div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <div className="d-flex justify-content-center">
          <a
            class="btn btn-primary btn-social mx-3"
            href="https://www.linkedin.com/in/arbaazansarkhan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in "></i>
          </a>
          <a
            class="btn btn-dark btn-social mx-3"
            href="https://github.com/iamarbaazkhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github "></i>
          </a>
          
        </div>
      </ScrollAnimation>
    </div>
  </header>
);

export default header;
