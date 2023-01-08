import "./Lessons.css";
import { Link } from "react-router-dom";
import { getLessons } from "./LessonsAPI";
import Cookies from "universal-cookie";
import React, { useEffect, useState } from 'react';
import lessonImage from "../images/lesson.png";
import { useNavigate } from "react-router-dom";

const items = [
  {
    name: "Item 1",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Item 2",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Item 3",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Item 4",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Item 5",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Item 6",
    image: "https://picsum.photos/200/300",
  },
  // add more items here
];

function onClick() {
  // route to /scan-qr
  <Link to="/scan-qr">Scan QR</Link>;
}

function getCoursesForInstructor(courses, instructorId) {
  return courses.filter(function (course) {
    return course.instructor_id === instructorId;
  });
}



function Lessons() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const token = cookies.get("token");
  console.log(token);
  const [courseMap, setCourseMap] = useState([]);

  useEffect(() => {
  getLessons(token)
    .then((data) => {
      if (data.status === 200) {
        console.log(data.data);
        const courses = getCoursesForInstructor(data.data,8 );
        console.log(courses);
        // create a map list by name of the course and image in the images clasor
        const courseMap = courses.map((course) => {
          return {
            name: course.name,
            image: lessonImage,
          };
        });
        setCourseMap(courseMap)
      }
    })
    .catch((err) => console.log("Error occurred"));
  }, []);


  return (
    <div className="grid-list">
      {courseMap.map((item) => (
        <div className="grid-item" key={item.name} onClick={() => {
          navigate("/scan-qr")
        }}>
          <img src={item.image} alt={item.name} />
          <div className="item-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Lessons;
