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
                   <Card.Title> <h4>{title}</h4> </Card.Title>
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

export default HomeCourse;