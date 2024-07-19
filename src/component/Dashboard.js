import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {  FaCalendarAlt, FaUsers,} from 'react-icons/fa';

function Dashboard() {
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
          <Link to="/patients" onClick={() => navigateToPage('patients')} className={currentPage === 'patients' ? 'active' : ''}>
            <FaUsers className="icon" /> Patients
          </Link>
        </li>
        <li>
          <Link to="/bookingform" onClick={() => navigateToPage('bookingform')} className={currentPage === 'bookingform' ? 'active' : ''}>
            <FaCalendarAlt className="icon" /> BookingForm
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
<h1>Welcome to Our Telemedicine Platform</h1>
<p>Your health, our priority. Connect with healthcare providers from the comfort of your home.</p>
<section class="intro">
<h2>Why Choose Telemedicine?</h2>
<p>Telemedicine offers you a convenient and efficient way to consult with your healthcare provider without the need for a physical visit.</p>
</section>
<section class="features">
<h2>Our Services:!</h2>
<div class="feature">
    <img src="picture/pic1.jpg" alt="Online Consultation"/>
    
    <h3>Online Consultation</h3>
    <p>Get professional medical advice and consultation from certified doctors.</p>
</div>
<div class="feature">
    <img src="picture/pic10.jpg" alt="Prescription Services"/>
    <h3>Prescription Services</h3>
    <p>Receive your prescriptions online and have them delivered to your doorstep.</p>
</div>
<div class="feature">
    <img src="picture/pic3.jpg" alt="Remote Monitoring"/>
    <h3>Remote Monitoring</h3>
    <p>Keep track of your health with remote monitoring services and regular check-ins.</p>
</div>
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

export default Dashboard;