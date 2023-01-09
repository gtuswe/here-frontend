import axios from "axios";


export async function getLessons(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {};
  const response = await axios.get(
    "https://herequickattendance.me/api/course",
    config
  );

  return response;
}
