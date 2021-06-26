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
              to="contact"
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
