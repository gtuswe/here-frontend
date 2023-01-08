import axios from "axios";

export async function getLessons() {
  console.log();
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {};
  const response = await axios.get(
    "https://herequickattendance.me/api/course",
    bodyParameters,
    config
  );
  return response;
}
