import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import HomeCourse from './HomeCourse'
import './Home.css'

// Font Awesome useing.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFlag, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';

// Fetch for data loading in Home page.
const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect( ()=> {
     fetch('./courseData.json')
       .then(res => res.json())
       .then(data => setCourses(data.courses))
  },[])

    //For Showing Home four card.
    courses.length = 4;

    return (
    // Banner image showing.
      <div>
         <div className="banner">
           <div className="container mt-2 mb-5">
               <Row className="row justify-content-center">
                   <Col className="col-md-12 col-xl-8">                    
                     <div className="banner-content text-center">                     
                          <p className="subheading text-center">Expert instruction</p>          
                           <h1><span className="font-weight-normal pt-2 mt-2">It's Time To Amplify</span> Your Online Career</h1>                  
                       </div>
                   </Col>
               </Row>
           </div> 
         </div>
        
        <div className="Extra-course container">
         <Row xs={1} md={4} className="g-4 mt-4">
          <Col>
           <Card className="p-4 shadow-sm">
              <div className="m-auto fs-3 text-success">
              <FontAwesomeIcon icon={faFlag}/>
              </div>
              <h4>Expert Teacher</h4>
              <Card.Text>Develop skills for career of various majors including computer</Card.Text>
            </Card>
           </Col>
           <Col>
           <Card className="p-4" bg="info" text="white">
              <div className="m-auto fs-3 text-success">
                <FontAwesomeIcon icon={faUser} color="black"/>
              </div>
              <h4>Self Devlopement</h4>
              <Card.Text>Develop skills for career of various majors including computer.</Card.Text>
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
           <Card className="p-4" bg="info" text="white">
              <div className="m-auto fs-3 text-success">
                <FontAwesomeIcon icon={faPhone} color="black"/>
              </div>
              <h4>Life Time Support</h4>
              <Card.Text>Develop skills for career of various majors including computer.</Card.Text>
            </Card>
           </Col>
         </Row>
        </div>
      
        <div className="container mt-5 mb-5">
          <Row xs={1} md={2} className="g-4">
              {
               courses.map(course => <HomeCourse 
                key={course.id}
                course={course} 
                />)
              }
          </Row> 
        </div>

      </div>
     );
};

export default Home;