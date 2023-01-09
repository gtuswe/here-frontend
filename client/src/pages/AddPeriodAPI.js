import axios from "axios";
import Cookies from "universal-cookie";

export async function addPeriodAPI(data) {
  const cookies = new Cookies();

  const token = cookies.get("token");
  console.log(token);
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
 const days = ["mon", "tue", "wed", "thu", "fri"];

  let randDay = Math.floor(Math.random() * 5);
    console.log(randDay);
  let randTime = Math.floor(Math.random() * 11);
    console.log(randTime)
  const classes = ["Z23", "Z11", "Z10", "Z20"];

  let randClass = Math.floor(Math.random() * 4);

  const response = await axios.post(
    "https://herequickattendance.me/api/period",
    {
      start_time: randTime,
      end_time: randTime + 2,
      course_id: data.id,
      location: classes[randClass],
      week_day: days[randDay],
    },
    config
  );

  console.log(response);
  return response;
}
