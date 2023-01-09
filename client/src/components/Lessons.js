import "./Lessons.css";
import { Link } from "react-router-dom";
import { getLessons } from "./LessonsAPI";
import Cookies from "universal-cookie";
import React, { useEffect, useState } from "react";
import lessonImage from "../images/lesson.png";
import { useNavigate } from "react-router-dom";

import { getInstructorId } from "./InstructorAPI";


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
          console.log();

          getInstructorId(token).then((dataa) => {
            if (dataa.status === 200) {
              const courses = getCoursesForInstructor(data.data, dataa.data.id);
              console.log(courses);
              // create a map list by name of the course and image in the images clasor
              const courseMap = courses.map((course) => {
                return {
                  name: course.name,
                  image: lessonImage,
                  id: course.id,
                };
              });
              setCourseMap(courseMap);
            }
          });
        }
      })
      .catch((err) => console.log("Error occurred"));
  }, []);

  return (
    <div className="grid-list">
      {courseMap.map((item) => (
        <div
          className="grid-item"
          key={item.name}
          onClick={(event) => {
            cookies.set("course_id", item.id);
            // get current time
            const date = new Date();
            // get full date and time
            const fullDate =
              date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds();
            cookies.set("date", fullDate);

            navigate("/scan-qr");
          }}
        >
          <img src={item.image} alt={item.name} />
          <div className="item-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Lessons;
