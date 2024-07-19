import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{ width: '200px', background: '#f0f0f0', height: '100vh' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/appointment">Appointment</Link>
        </li>
        <li>
          <Link to="/patients">Patients</Link>
        </li>
        <li>
          <Link to="/consultation">Consultation</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
