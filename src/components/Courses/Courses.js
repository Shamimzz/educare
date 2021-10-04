import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';


//Get data from JSON file for getting ALl Couurses.
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseData.json')
          .then(res => res.json())
          .then(data => setCourses(data.courses))
    }, [])

    return (
      //Showing data in single Course.
      <div>
         <div className="container mb-5">
         <Row xs={1} md={2} className="g-4">
           {
             courses.map(course => <SingleCourse
             key={course.id}
             course={course}
             ></SingleCourse>)
           }
          </Row> 
         </div>
      </div>
    );
};

export default Courses;