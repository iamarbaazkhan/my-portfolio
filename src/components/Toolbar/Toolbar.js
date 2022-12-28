import React from "react";
import DrawerTogglerButton from "../SideDrawer/DrawerTogglerButton.js";
import "./Toolbar.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

// Link Styling

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerTogglerButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link
          href="/"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          AK
        </Link>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          
          <li>
            <Link
              to="mailto:arbaazansarkhan98@gmail.com?subject=Project%20Details&body=I%20would%20love%20to%20work%20on%20your%20project.%20I%20am%20a%20reliable%20worker%20and%20I%20go%20above%20and%20beyond%20to%20make%20sure%20that%20every%20expectation%20is%20met.%20I%20am%20an%20enthusiastic%20individual%20and%20I%20thrive%20in%20an%20upbeat%2C%20fast-paced%20working%20environment.%20I%20have%20excellent%20communication%20skills%2C%20strong%20organizational%20capabilities%20and%20a%20positive%20personality%20as%20well!%E2%80%9D%0D%0A%0D%0A"
              smooth={true}
              duration={1000}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
