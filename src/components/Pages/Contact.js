import React from "react";
import "./Contact.css";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = (props) => (
  <section class="page-section" id="contact">
    <div class="text-center">
      <h2 class="section-heading text-uppercase">Contact</h2>
      <h3 class="section-subheading text-muted">
        For any project related queries, you can find me at:
      </h3>
      <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
        <div className="d-flex justify-content-center ">
          <a href="mailto:arbaazansarkhan98@gmail.com" className="emailme">
            arbaazansarkhan98@gmail.com
          </a>
        </div>
      </ScrollAnimation>
      {/* <a class="btn  mx-2" href="https://www.linkedin.com/in/arbaazansarkhan/">
        <i class="fab fa-linkedin-in "></i>
      </a>
      <a class="btn  mx-2" href="https://github.com/iamarbaazkhan">
        <i class="fab fa-github "></i>
      </a>
      <a class="btn   mx-2" href="https://www.instagram.com/arbaaz.khan98">
        <i class="fab fa-instagram" style={{ color: "black" }}></i>
      </a> */}
    </div>
  </section>
);

export default Contact;
