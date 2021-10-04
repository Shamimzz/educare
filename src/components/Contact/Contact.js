import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, FormControl, Row } from 'react-bootstrap';

// Font Awesome.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


//Showing Contact from.
const Contact = () => {
    return (
        <div className="container mt-5 mb-5">
            <Row className="g-4">
                <div className="row">
                   <h4 className="mt-4 mb-4 text-center m-auto fs-2 w-50">For more information about our courses, get in touch</h4>
                </div>
                <Col className="p-4 shadow-lg m-3 ">
                   <div className="p-3 m-2">
                      <p className="text-dark text-decoration-none" ><h5>Make a Call</h5> <FontAwesomeIcon icon={faPhone} color="#4CAF50" size="lg"/>  +68 345 5902</p>
                   </div>
                   <div className="p-3 m-2">
                     <p className="text-dark text-decoration-none" ><h5>Email Us</h5>  <FontAwesomeIcon icon={faEnvelope} color="#4CAF50" size="lg"/>   info@yourdomain.com</p>
                   </div>
                   <div className="p-3 m-2">
                      <p className="text-dark text-decoration-none" ><h5>Location</h5> <FontAwesomeIcon icon={faFlag} color="#4CAF50" size="lg"/>  123 Fifth Floor East, New York.</p>
                   </div>
                </Col>
                <Col className="p-4 shadow-lg m-3">
                     <div style={{ display: 'block', width:700, padding:30 }}>          
                     <Form>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write Your Name</h6> </Form.Label>
                         <Form.Control type="text" placeholder="Enter your full name"/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write Your email</h6> </Form.Label>
                         <Form.Control type="email" placeholder="Enter your your email address"/>
                       </Form.Group>
                       <Form.Group className="mb-3">
                         <Form.Label> <h6>Write your Message</h6> </Form.Label>
                         <FormControl as="textarea" aria-label="With textarea"/>
                       </Form.Group>
                       <Button variant="success" type="submit">
                         Submit
                       </Button>
                     </Form>
                    </div>
                </Col>             
            </Row>      
        </div>       
    );
};
export default Contact;