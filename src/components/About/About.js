import React from 'react';
import './About.css';
import team1 from './team-1.jpg';
import team2 from './team-2.jpg';
import team3 from './team-3.jpg';

// Font Awesome useing.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
      <div>
        <div className="pt-5 pb-5 text-center bg-info bg-opacity-10">
          <h2 className="fs-1">Who We Are</h2>
          <div>
            <p className="text-primary fs-5 text-muted"> Home / About Us</p>
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
         
        <div className="professional mt-5 mb-5">
          <div class="section-heading center-heading">
                    <span class="subheading">Best Expert Team</span>
                    <h3>Our Professional Team</h3>
                    <p>The ultimate planning solution for busy women who want to reach their personal goals</p>
                </div>
        </div>
        <div className="container Team-members mt-5 mb-5">
        <Row xs={1} md={3} className="g-4">
            <Col>
            <Card className="">
            <Card.Img className="cardImg" variant="top" src={team1} />
            <Card.Body>
              <Card.Title>Harish Ham</Card.Title>
              <p className="text-muted">CEO, Developer</p>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="">
            <Card.Img className="cardImg" variant="top" src={team2} />
            <Card.Body>
              <Card.Title>Tanvir Hasan</Card.Title>
              <p className="text-muted">Market Researcher</p>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card className="">
            <Card.Img className="cardImg" variant="top" src={team3} />
            <Card.Body>
              <Card.Title>Mikele John</Card.Title>
              <p className="text-muted">Market Researcher</p>
            </Card.Body>
          </Card>
          </Col>
         </Row>
        </div>
        

      </div>
    );
};

export default About;