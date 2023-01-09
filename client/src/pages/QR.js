import Image from "react-bootstrap/Image";
import styles from "./QR.module.css";
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { QRAPI } from "./QRAPI";
import Cookies from "universal-cookie";
import axios from "axios";

function DisplayQR() {
  const [time, setTime] = useState("");

  const cookies = new Cookies();

  const id = cookies.get("course_id");
  const date = cookies.get("date");

  let dataJson = {
    course_id: id,
    created_at: time,
  };

  useEffect(() => {
    const date = new Date();
    // get full date and time
    const fullDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds();
    setTime(fullDate);
  });

  let data = JSON.stringify(dataJson);
  return (
    <div className={styles["qr-part"]}>
      <h1 className={styles["qr-header"]}>SCAN QR to say HERE!</h1>
      <QRCode className={styles["qr-qr"]} value={data} />
    </div>
  );
}

function Header() {
  return (
    <div className={styles["header"]}>
      <h1>Participants</h1>
    </div>
  );
}

function Table() {
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    getParticipants().then((data) => {
      setAttendanceList(data);
      console.log(data);
    });
  });
  return (
    <div>
      {attendanceList.map((attendance) => (
        <div className="grid-item">
          <span className={styles["name"]}>
            {attendance["Student"]["Person"]["name"]}
          </span>
          <span className={styles["name"]}>
            {attendance["Student"]["Person"]["surname"]}
          </span>
          <span className={styles["name"]}>
            {attendance["Student"]["Person"]["mail"]}
          </span>
        </div>
      ))}
    </div>
  );
}

function Attendances() {
  return (
    <div>
      <Header />
      <Table />
    </div>
  );
}

async function getParticipants() {
  const cookies = new Cookies();

  const id = cookies.get("course_id");
  const token = cookies.get("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  let fullUrl = "https://herequickattendance.me/api/course/" + id + "/list";
  const response = await axios.get(fullUrl, config);

  return response.data;
}

function GetResultButton() {
  return (
    <div className={styles["button-container"]} onClick={getParticipants}>
      <button className={styles["button"]}>Get Result</button>
    </div>
  );
}

const QR = () => {
  useEffect(() => {
    QRAPI()
      .then((data) => {
        if (data.status === 200) {
          console.log(data.data);
        }
      })
      .catch((err) => console.log("Error occurred"));
  }, []);

  return (
    <div className={styles["main"]}>
      <DisplayQR />
      <Attendances />
      <GetResultButton />
    </div>
  );
};

export default QR;
