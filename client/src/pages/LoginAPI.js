import axios from "axios";

export async function loginAPI(data) {
  console.log(data)
  const response = await axios.post("http://localhost:3000/api/login", {
    mail: data.email,
    password: data.password,
  });
  return response;
}


