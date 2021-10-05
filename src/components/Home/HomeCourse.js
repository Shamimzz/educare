import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Geting Json data then shown as a home Courses.
const HomeCourse = (props) => { 
    // props.course.length = 4;
    const {title, img, price, desc, student, duration} = props.course;
    console.log(props);

    return (
        <div>
            <div className="shadow-sm">
                <Col>
                <Card>
                  <Card.Img variant="top" src={img}/>
                  <Card.Body>
                   <Card.Title className="mb-3 mt-3">{title}</Card.Title>
                    <div className="mb-3 d-flex bg-info bg-opacity-25 justify-content-between align-items-center p-3 rounded-1">
                      <h4 className="fw-blod">{price}</h4>                           
                      <p className="fw-bold mb-0"><FontAwesomeIcon icon={faUser}/>  {student}  Student</p>
                      <Card.Text className="fw-bold"> {duration}</Card.Text>
                    </div>                    
                    <Card.Text>{desc}</Card.Text>
                  </Card.Body> 
                </Card>
                </Col>   
           </div>
        </div>
    );
};

export default HomeCourse;