import React, { Component } from "react";
import Portfolioitem from "./Portfolioitem.js";
import ScrollAnimation from "react-animate-on-scroll";
import "./Portfolio.css";
//importing image
import img1 from "../assets/img/ipfacompany.png";
import img3 from "../assets/img/trinetratech.png";
import img5 from "../assets/img/giftsoln.png";

// creating a array and map it

const portfolio = [
  {
    title: "Patent  Booking Website",
    subtitle: "Tech Stack : Wordpress",
    image: img1,
    link: (
      <a href="https://ipfa.in/" className="visit">
        <i className="fas fa-link"></i> VISIT
      </a>
    ),
  },
  {
    title: "CCTV Dealers Website",
    subtitle: "Tech Stack :Html5, Css3,Jquery",
    image: img3,
    link: (
      <a href="https://trinetratechnologies.co.in/" className="visit">
        <i className="fas fa-link"></i> VISIT
      </a>
    ),
  },
  {
    title: "E-commerce Website",
    subtitle: "Made many UI changes,associated with DigitalOn company",
    image: img5,
    link: (
      <a href="https://giftingsolutionsindia.com/" className="visit">
        <i className="fas fa-link"></i> VISIT
      </a>
    ),
  },
];
class Portfolio extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Projects I have completed till now
              </h3>
            </div>
            <div className="row">
              {portfolio.map((item, index) => {
                return <Portfolioitem {...item} key={index} />;
              })}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default Portfolio;
