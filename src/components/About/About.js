import React from 'react';
import './About.css';

// Font Awesome useing.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
      <div>
        <div className="container text-center mt-5 mb-5">
          <h2 className="fs-1">Who We Are</h2>
          <div>
            <p className="text-primary fs-5"> Home / About Us</p>
          </div>
        </div>
          <div className="About-banner">
          <div className="Extra-course container">
         <Row xs={1} md={3} className="g-4 mt-4 text-center">
          <Col>
           <Card className="p-4 shadow-sm" text="dark">
              <div className="m-auto fs-3 text-success">
              <FontAwesomeIcon icon={faFlag}/>
              </div>
              <h4>Expert Teacher</h4>
              <Card.Text>Develop skills for career of various majors including computer</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4 shadow-sm">
              <div className="m-auto fs-3 text-success">
              <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h4>Remote Learning</h4>
              <Card.Text>Develop skills for career of various majors including computer.</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4" text="dark">
              <div className="m-auto fs-3 text-success">
                <FontAwesomeIcon icon={faPhone} color="green"/>
              </div>
              <h4>Life Time Support</h4>
              <Card.Text>Develop skills for career of various majors including computer.</Card.Text>
            </Card>
           </Col>
         </Row>
        </div>
         </div>
      </div>
    );
};

export default About;