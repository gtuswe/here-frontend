import Image from "react-bootstrap/Image";
import styles from "./QR.module.css";
import QRCode from "react-qr-code";
import { useEffect } from "react";
import { QRAPI } from "./QRAPI";
import Cookies from "universal-cookie";

function DisplayQR() {
  const cookies = new Cookies();

  const id = cookies.get("course_id");
  const date = cookies.get("date");

  let dataJson = {
    course_id: id,
    created_at: date,
  };
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
  return (
    <div>
      <table className={styles["table"]}>
        <tr>
          <th>Participant Name</th>
          <th>Attendance</th>
        </tr>
        <tr>
          <td>Participant 1</td>
          <td>Yes</td>
        </tr>
      </table>
    </div>
  );
}

function Attendances() {
  return (
    <div className={styles["attendances"]}>
      <Header />
      <Table />
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
    </div>
  );
};

export default QR;
