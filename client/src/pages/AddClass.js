import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddClass.css";

function AddClass() {
  const [lessonName, setLessonName] = useState("");
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState({ hour: "", minute: "" });
  const [endTime, setEndTime] = useState({ hour: "", minute: "" });

  function handleCreate() {
    // Add code to create the lesson here
  }

  function handleCancel() {
    // Add code to cancel the creation of the lesson here
  }
  return (
    <div className="container mt-5">
      <h1>Create New Lesson</h1>
      <form>
        <div className="form-group">
          <label>Lesson Name:</label>
          <input
            className="form-control"
            value={lessonName}
            onChange={(e) => setLessonName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Day:</label>
          <br />
          <div className="day-container">
            <label>
              <input
                type="radio"
                name="day"
                value="Monday"
                checked={day === "Monday"}
                onChange={(e) => setDay(e.target.value)}
                inline
                className="day-radio"
              />
              Monday
            </label>
            <label>
              <input
                type="radio"
                name="day"
                value="Tuesday"
                checked={day === "Tuesday"}
                onChange={(e) => setDay(e.target.value)}
                inline
                className="day-radio"
              />
              Tuesday
            </label>
            <label>
              <input
                type="radio"
                name="day"
                value="Wednesday"
                checked={day === "Wednesday"}
                onChange={(e) => setDay(e.target.value)}
                inline
                className="day-radio"
              />
              Wednesday
            </label>
            <label>
              <input
                type="radio"
                name="day"
                value="Thursday"
                checked={day === "Thursday"}
                onChange={(e) => setDay(e.target.value)}
                inline
                className="day-radio"
              />
              Thursday
            </label>
            <label>
              <input
                type="radio"
                name="day"
                value="Friday"
                checked={day === "Friday"}
                onChange={(e) => setDay(e.target.value)}
                inline
                className="day-radio"
              />
              Friday
            </label>
            <label>
              <input
                type="radio"
                name="day"
                value="Saturday"
                checked={day === "Saturday"}
                onChange={(e) => setDay(e.target.value)}
                inline
                className="day-radio"
              />
              Saturday
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="number"
            value={startTime.hour}
            onChange={(e) =>
              setStartTime({ ...startTime, hour: e.target.value })
            }
            placeholder="Hour"
            min="0"
            max="23"
          />
          <input
            type="number"
            value={startTime.minute}
            onChange={(e) =>
              setStartTime({ ...startTime, minute: e.target.value })
            }
            placeholder="Minute"
            min="0"
            max="59"
          />
        </div>
        <br />
        <label>End Time:</label>
        <div className="time-container">
          <input
            type="number"
            value={endTime.hour}
            onChange={(e) => setEndTime({ ...endTime, hour: e.target.value })}
            placeholder="Hour"
            min="0"
            max="23"
          />
          <input
            type="number"
            value={endTime.minute}
            onChange={(e) => setEndTime({ ...endTime, minute: e.target.value })}
            placeholder="Minute"
            min="0"
            max="59"
          />
        </div>
        <button
          class
          type="submit"
          className="btn btn-primary"
          onClick={handleCreate}
        >
          Create
        </button>
        <button className="btn btn-secondary ml-2" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddClass;
