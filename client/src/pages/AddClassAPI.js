import axios from "axios";

export async function addClassAPI(data) {
  console.log(data);
  let token = localStorage.getItem("token");
  console.log(token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const response = await axios.post(
    "https://herequickattendance.me/api/course",
    {
      name: data.name,
      start_date: data.start_date,
      end_date: data.end_date,
      min_attendance_percentage: data.min_attendance_percentage,
      code: data.code,
      description: data.description,
    }
  );
  console.log(response);
  return response;
}
