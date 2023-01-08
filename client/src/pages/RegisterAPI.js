import axios from "axios";

export async function registerAPI(data) {
  console.log(data)
  const response = await axios.post("https://herequickattendance.me/api/instructor", {
    "password": data.password,
    "name": data.name,
    "surname": data.surname,
    "mail": data.mail,
  });
  console.log(response)
  return response;
}


