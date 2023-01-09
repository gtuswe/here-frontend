import axios from "axios";


export async function getInstructorId(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {};
  const response = await axios.get(
    "https://herequickattendance.me/api/whoami",
    config
  );
  

  return response;
}
