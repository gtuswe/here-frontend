import axios from "axios";

export async function addClassAPI(data) {
  console.log(data);
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6Imluc3RydWN0b3IiLCJpYXQiOjE2NzMyMTI4MjAsImV4cCI6MTY3MzIxNjQyMH0.B1SQR3h8Y8ibCPrf2jYItu0N3mL5uGnKljEBYJREvFk"
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(
    "https://herequickattendance.me/api/course",
    {
      name: data.name,
      start_date: data.start_date,
      end_date: data.end_date,
      min_attendance_percentage: data.min_attendance_percentage,
      code: data.code,
      description: data.description,
    },
     config
  );
  console.log(response);
  return response;
}
