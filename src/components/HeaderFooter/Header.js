import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// Showing Header Section.

const Header = () => {
    return (
        <div className="Header">
          <Navbar bg="info" variant="dark">
          <Container>
              <NavLink className="text-decoration-none fs-5" to="/home"><Navbar.Brand >EduCare</Navbar.Brand></NavLink>
              <Nav className="">
                <NavLink className="nav text-light p-2 mr-5 text-decoration-none fs-5" to="/Home">Home</NavLink>
                <NavLink className="nav text-light p-2 mr-5 text-decoration-none fs-5" to="/courses">Courses</NavLink>
                <NavLink className="nav text-light p-2 mr-5 text-decoration-none fs-5" to="/about">About Us</NavLink>
                <NavLink className="nav text-light p-2 mr-5 text-decoration-none fs-5" to="/contact">Contract</NavLink>
             </Nav>
          </Container>
        </Navbar>    
        </div>  
    );
};

export default Header;