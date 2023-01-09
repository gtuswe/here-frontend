import React, { useState } from 'react';
import axios from 'axios';
import './AddClass.css';
import { addClassAPI } from "./AddClassAPI";
import { useNavigate } from "react-router-dom";

function AddClassPage() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minAttendancePercentage, setMinAttendancePercentage] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name : name,
      start_date: startDate,
      end_date: endDate,
      min_attendance_percentage: minAttendancePercentage,
      code : code,
      description: description,
    };


      addClassAPI(data).then((data) => {
        if (data.status === 200) {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log("Error occurred"));
    };
  

  return (
    <div className="containerr">
      <form className="formm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={(event) => setStartDate(event.target.value)} />

        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={(event) => setEndDate(event.target.value)} />

        <label htmlFor="minAttendancePercentage">Minimum Attendance Percentage:</label>
        <input type="number" id="minAttendancePercentage" value={minAttendancePercentage} onChange={(event) => setMinAttendancePercentage(event.target.value)} />

        <label htmlFor="code">Lesson Code:</label>
        <input type="text" id="code" value={code} onChange={(event) => setCode(event.target.value)} />

        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(event) => setDescription(event.target.value)} />

        <button type="submit">Submit</button>

        {response && <p>Successfully added class!</p>}
      </form>
    </div>
  );
}


export default AddClassPage
