import axios from "axios";
import Cookies from "universal-cookie";

export async function QRAPI() {
  const cookies = new Cookies();

  const data = cookies.get("course_id");
  const token = cookies.get("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    course_id: data,
    period_id: 1
  };

  const response = await axios.post(
    "https://herequickattendance.me/api/pastcourse",
    bodyParameters,
    config
  );

  return response;
}
