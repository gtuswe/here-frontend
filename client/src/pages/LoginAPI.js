import axios from "axios";


export async function loginAPI(data) {
  console.log(data);
  const response = await axios.post(
    "https://herequickattendance.me/api/login",
    {
      mail: data.email,
      password: data.password,
    }
  );

  return response;
}
