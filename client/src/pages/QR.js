import Image from "react-bootstrap/Image";
import styles from "./QR.module.css";
import QRCode from "react-qr-code";

function DisplayQR() {
  return (
    <div className={styles["qr-part"]}>
      <h1 className={styles["qr-header"]}>SCAN QR to say HERE!</h1>
      <QRCode value="A3D98QDFG398654H" />
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
      <Header/>
      <Table/>
    </div>
  );
}

const QR = () => {
  return (
    <div className={styles["main"]}>
      <DisplayQR />
      <Attendances/>
    </div>
  );
};

export default QR;
