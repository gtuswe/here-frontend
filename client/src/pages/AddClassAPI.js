import axios from "axios";
import Cookies from "universal-cookie";

export async function addClassAPI(data) {
  const cookies = new Cookies();

  const token = cookies.get("token");
  console.log(token);
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
