import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Showing Single course.
const SingleCourse = (props) => {
  console.log(props);
  
// geting all the value from props.
  const {title, img, price, desc, student, duration} = props.course;

    return (
        <div> 
          <div className="mt-5 p-2">
          <Col>
            <Card>
              <Card.Img variant="top" src={img}/>
              <Card.Body>
               <Card.Title className="mb-4 mt-3">{title}</Card.Title>
                <div className="mb-4 d-flex bg-info bg-opacity-25 justify-content-between align-items-center p-3 rounded-1">
                  <h4 className="fw-blod">{price}</h4>                           
                  <p className="fw-bold mb-0"><FontAwesomeIcon icon={faUser}/>  {student} Student</p>
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

export default SingleCourse;


