import React from 'react';
import './About.css';

const About=props=>(
    <section className="page-section bg-light" id="about">
        <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">If you’re wondering who I am…</h3>
                </div>  
        <div className="row ">
            <div className="col-md-6 text-section">
               <div className="aboutme">
               Experienced Web Developer with a demonstrated history of working in the information technology and services industry. Mostly I have worked on Front-end web development  and I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
               </div>
               <div className="btn-parent">
               <a href="https://drive.google.com/file/d/1A87czUe7SYEmRa-GGtwLAUNNMqNraDGH/view?usp=sharing"><button  className="btn-resume">Download CV</button></a>
               </div>
            </div>
            <div className="col-md-6 img-section">
            <img  className="devabout" src={ require('../assets/img/devabout.svg') } />

            </div>
        </div>

        

    </section>
    
  
);


export default About;