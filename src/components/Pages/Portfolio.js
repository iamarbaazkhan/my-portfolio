import React , {Component} from 'react';
import Portfolioitem from './Portfolioitem.js';
import './Portfolio.css';
import {Link} from 'react-scroll';
//importing image 
import img1 from '../assets/img/ipfacompany.png';
import img2 from '../assets/img/androidapp.png';
import img3 from '../assets/img/trinetratech.png';
import img4 from '../assets/img/amancer.png';
import img5 from '../assets/img/giftsoln.png';
import img6 from '../assets/img/androidapp.png';

// creating a array and map it 

const portfolio =[
    {title:'Patent  Booking Website',subtitle:'Tech Stack : Wordpress, Html5, Css3',image:img1,link:<Link to="https://ipfa.in/"   className="visit"><i className="fas fa-link"></i>  VISIT</Link>},
    {title:'E-Learning Android App',subtitle:'Tech Stack : Core Java, MySql, Php',image:img2, link:<Link to="https://play.google.com/store/apps/details?id=com.arbicce.intccemobileapp"  className="visit"><i className="fas fa-link"></i>  VISIT</Link>},
    {title:'CCTV Dealers Website',subtitle:'Tech Stack : Wordpress, Html5, Css3',image:img3,link:<Link to="https://trinetratechnologies.co.in/"   className="visit"><i className="fas fa-link"></i>  VISIT</Link>},
    {title:'Event Booking Website',subtitle:'Tech Stack : Wordpress, Html5, Css3',image:img4,link:<Link to="https://amanecercreators.com/"   className="visit"><i className="fas fa-link"></i>  VISIT</Link>},
    {title:'E-commerce Website',subtitle:'Made many UI changes,associated with DigitalOn company',image:img5,link:<Link to="https://giftingsolutionsindia.com/"   className="visit"><i className="fas fa-link"></i>  VISIT</Link>},
    {title:'PDF Reader Android App',subtitle:'Tech Stack : Core Java, XML',image:img6,link:<Link to="https://play.google.com/store/apps/details?id=com.intcce.pocketbook"  className="visit"><i className="fas fa-link"></i>  VISIT</Link>}

    
];
class Portfolio extends Component{
     
    render(){
        return(
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Projects I have completed till now</h3>
                </div>
                <div className="row">
                   {portfolio.map((item,index)=>{
                       return <Portfolioitem {...item} key={index}/>
                   })}
                
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio;