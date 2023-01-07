import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-option">
        <Link to="/new-class">Add New Class</Link>
      </div>
      <div className="sidebar-option">
        <a href="#">Profile</a>
      </div>
    </div>
  );
}

export default Sidebar;