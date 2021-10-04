import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


// Showing Footer Section...

const Footer = () => {
    return (
          <div className="Footer">
          <div className="bg-info">
          <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
             <div className="mt-2">
                <p className="text-light text-decoration-none" ><h4>Explore</h4></p>
                <p className="text-light text-decoration-none" ><h6>Ph:</h6> +(68) 345 5902</p>
                <p className="text-light text-decoration-none" ><h6>Email:</h6> info@yourdomain.com</p>
                <p className="text-light text-decoration-none" ><h6>Location:</h6> 123 Fifth Floor East, New York.</p>
              </div>
             </Col>
             <Col>
              <div className="mt-2">
                <p className="text-light p-2 mr-5 text-decoration-none"><h5>COURSES</h5> </p>
                <p><Link className="text-light p-2 mr-5 text-decoration-none" >SEO Business</Link></p>
                <p><Link className="text-light p-2 mr-5 text-decoration-none" >Digital Marketing</Link></p>
                <p><Link className="text-light p-2 mr-5 text-decoration-none" >Graphic Design</Link></p>
                <p><Link className="text-light p-2 mr-5 text-decoration-none" >Social Marketing</Link></p>
             </div>
             </Col>
             <Col>
              <div className="mt-2">
                <p className="text-light p-2 mr-5 text-decoration-none"><h4>Legal</h4></p>
                <p><Link className="text-light p-2 mr-5 text-decoration-none" >Terms & Condition</Link></p>
                <p><Link className="text-light p-2 mr-5 text-decoration-none" >Privacy policy</Link></p>
                <p><Link className="text-light p-2 mr-5 text-decoration-none" >Return policy</Link></p>              
             </div>
             </Col>         
          </Row> 
             <h6 className="pb-3 pt-2">© Copyright EduHash Template All rights reserved. Crafted by<a  className="text-light text-decoration-none" href="https://github.com/Shamimzz"> Shamimzz</a></h6>
          </Container>
        </div>    
        </div>  
    );
};

export default Footer;