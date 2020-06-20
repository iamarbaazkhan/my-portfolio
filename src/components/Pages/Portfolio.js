import React , {Component} from 'react';
import Portfolioitem from './Portfolioitem.js';
import './Portfolio.css';
//importing image 
import img1 from '../assets/img/ipfacompany.png';
import img2 from '../assets/img/androidapp.png';
import img3 from '../assets/img/trinetratech.png';
import img4 from '../assets/img/amancer.png';
import img5 from '../assets/img/giftsoln.png';
import img6 from '../assets/img/androidapp.png';

// creating a array and map it 

const portfolio =[
    {title:'Patent  Booking Website',subtitle:'Tech Stack : Wordpress, Html5, Css3',image:img1,link:<a href="https://ipfa.in/"  target="_blank" className="visit"><i className="fas fa-link"></i>  VISIT</a>},
    {title:'E-Learning Android App',subtitle:'Tech Stack : Core Java, MySql, Php',image:img2, link:<a href="https://play.google.com/store/apps/details?id=com.arbicce.intccemobileapp"  target="_blank" className="visit"><i className="fas fa-link"></i>  VISIT</a>},
    {title:'CCTV Dealers Website',subtitle:'Tech Stack : Wordpress, Html5, Css3',image:img3,link:<a href="https://trinetratechnologies.co.in/"  target="_blank" className="visit"><i className="fas fa-link"></i>  VISIT</a>},
    {title:'Event Booking Website',subtitle:'Tech Stack : Wordpress, Html5, Css3',image:img4,link:<a href="https://amanecercreators.com/"  target="_blank" className="visit"><i className="fas fa-link"></i>  VISIT</a>},
    {title:'E-commerce Website',subtitle:'Made many UI changes,associated with DigitalOn company',image:img5,link:<a href="https://giftingsolutionsindia.com/"  target="_blank" className="visit"><i className="fas fa-link"></i>  VISIT</a>},
    {title:'PDF Reader Android App',subtitle:'Tech Stack : Core Java, XML',image:img6,link:<a href="https://play.google.com/store/apps/details?id=com.intcce.pocketbook"  target="_blank" className="visit"><i className="fas fa-link"></i>  VISIT</a>}

    
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