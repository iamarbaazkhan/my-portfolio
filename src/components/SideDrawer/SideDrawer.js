import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-scroll';
const sideDrawer = props=>{
    let drawerClasses ='side-drawer';
    if (props.show) {
         drawerClasses='side-drawer open';
    }
    return(
    <nav className={drawerClasses}>
        <ul>

            <li><Link to="about" smooth={true} duration={1000}  style={{color:'#521751',textDecoration:'none'}}>About</Link></li>

        </ul>
    </nav>
    )
}

export default sideDrawer;
