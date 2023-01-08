import axios from "axios";

function getCoursesForInstructor(courses, instructorId) {
  return courses.filter(function (course) {
    return course.instructor_id === instructorId;
  });
}

export async function loginAPI(data) {
  console.log(data);
  const response = await axios.post(
    "https://herequickattendance.me/api/login",
    {
      mail: data.email,
      password: data.password,
    }
  );

  const config = {
    Authorization: `Bearer ${response.data.accessToken}`,
  };

  const other = await axios.get(
    "https://herequickattendance.me/api/course",
    {},
    config
  ).then((res) => {
    console.log(res);
  });

  const courses = getCoursesForInstructor(other.data, response.data.id);
  console.log(courses);

  return response;
}
