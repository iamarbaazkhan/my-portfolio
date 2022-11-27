import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const skills = (props) => (
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
    <section className="py-5 page-section bg-light">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">SKILLS</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="assets/img/logos/frontend.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="assets/img/logos/bootstrap.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="assets/img/logos/react.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-3 col-sm-6 my-3">
            <a href="#!">
              <img
                className="img-fluid d-block mx-auto"
                src="assets/img/logos/wordpress.svg"
                alt=""
              />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  </ScrollAnimation>
);

export default skills;
