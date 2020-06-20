import React from 'react';
import './Contact.css';

const Contact=props=>(
    <section class="page-section" id="contact">
       	<div class="text-center">
						<h2 class="section-heading text-uppercase">Contact</h2>
						<h3 class="section-subheading text-muted">For any project related queries, you can find me at:</h3>
                        <div className="d-flex justify-content-center ">
                            <a href="mailto:arbaazansarkhan98@gmail.com" className="emailme" >arbaazansarkhan98@gmail.com</a>
                            
                        </div>
                        <a class="btn  mx-2" href="https://www.linkedin.com/in/arbaazansarkhan/" target="_blank"><i class="fab fa-linkedin-in "></i></a>
                <a class="btn  mx-2" href="https://github.com/iamarbaazkhan" target="_blank"><i class="fab fa-github "></i></a>
                <a class="btn   mx-2" href="https://www.instagram.com/arbaazkhan25/" target="_blank"><i class="fab fa-instagram" style={{color:'black'}}></i></a>
                
					</div>

                    
    </section>


    
)

export default Contact;