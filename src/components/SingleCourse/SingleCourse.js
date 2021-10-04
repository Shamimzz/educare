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
          <div className="mt-5">
          <Col>
            <Card>
              <Card.Img variant="top" src={img}/>
              <Card.Body>
               <Card.Title>{title}</Card.Title>
                <div className="d-flex">
                  <h2 className="p-3">{price}</h2>                           
                  <Card.Text className="p-3 m-2">
                    <FontAwesomeIcon className="ml-3" icon={faUser}/>      
                    {student} Student</Card.Text>
                </div>         
                <Card.Text className="p-2 bg-info rounded-1 d-inline-block"> {duration}</Card.Text>
                <Card.Text>{desc}</Card.Text>
              </Card.Body> 
            </Card>
          </Col>
          </div> 
        </div>
    );
};

export default SingleCourse;


