import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {  FaCalendarAlt, FaUsers,} from 'react-icons/fa';

function AddminDash() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname.substring(1) || 'home');

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
    <header>TELEMEDICINE PLATFORM</header>
    
      <div className="content">
        <nav className="sidenav">
        
        <ul>
        <li>
          <Link to="/" onClick={() => navigateToPage('dashboard')} className={currentPage === 'dashboard' ? 'active' : ''}>
            <FaUsers className="icon" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/appointment" onClick={() => navigateToPage('appointment')} className={currentPage === 'appointment' ? 'active' : ''}>
            <FaCalendarAlt className="icon" /> Appointment
          </Link>
        </li>
       
        <li>
          <Link to="/addpatient" onClick={() => navigateToPage('patients')} className={currentPage === 'addpatients' ? 'active' : ''}>
            <FaUsers className="icon" /> AddPatient
          </Link>
        </li>
        <li>
        <Link to="/patient-list" onClick={() => navigateToPage('patient-list')} className={currentPage === 'patient-list' ? 'active' : ''}>
  <FaUsers className="icon" /> PatientList
</Link>

        </li>
       
      </ul>
         
        </nav>
        <div>
  
<div className="page">
<h1>Telemedicine Platform</h1>
<p>Your health, our priority. Connect with healthcare providers from the comfort of your home.</p>
<section class="intro">
<h2>Why Choose Telemedicine?</h2>
<p>Telemedicine offers you a convenient and efficient way to consult with your healthcare provider without the need for a physical visit.</p>
</section>

</div>
<footer>
<p>&copy; 2024 Telemedicine Platform. All rights reserved.</p>
</footer>

    </div>

        
      </div>
    </div>
  );
}

export default AddminDash;