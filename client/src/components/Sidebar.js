import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-option">
        <a href="#">Add New Class</a>
      </div>
      <div className="sidebar-option">
        <a href="#">Profile</a>
      </div>
    </div>
  );
}

export default Sidebar;