import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css';


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
        <div className="pt-5 pb-5 text-center bg-info bg-opacity-10">
            <h2 className="fs-1">Keep Learning.</h2>
            <div>
            <p className="text-primary fs-5 text-muted"> Home / All Courses</p>
        </div>
        </div>
         <div className="container mb-5">          
            <h2 className="text-center mt-4 after">Always Something New To Learn!</h2>
         <Row xs={1} md={3} className="g-4">
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