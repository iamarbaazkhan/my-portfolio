import React from "react";
import "./About.css";
import ScrollAnimation from "react-animate-on-scroll";

const About = (props) => (
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
    <section className="page-section bg-light" id="about">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">
          If you’re wondering who I am…
        </h3>
      </div>
      <div className="row ">
        <div className="col-md-6 text-section">
          <div className="aboutme">
            Experienced web developer with 3+ years of development experience using different frameworks and content management systems (CMS). I have been responsible for designing and developing new sites and web applications as well as maintaining and rehabilitating existing sites. Excellent planning, organizational and communication skills. Self-reliant to perform analysis and make recommendations. Efficient multi-tasker who can complete multiple projects under strict deadlines.
          </div>
  
        </div>
        <div className="col-md-6 img-section">
          <img
            className="devabout"
            src={require("../assets/img/devabout.svg")}
            alt="About me"
          />
        </div>
      </div>
    </section>
  </ScrollAnimation>
);

export default About;
