// import React, { useState } from 'react';
// import { Link} from 'react-router-dom';

// function Patients() {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     address: '',
//     // phone: '',
//     email: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://localhost:8080/api/v1/patient/post-patient', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       // Optionally clear the form or show a success message
//       setFormData({
//         name: '',
//         age: '',
//         address: '',
//         // phone: '',
//         email: ''
//       });
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div>
//       <header>
//         <h1>Telemedicine System</h1>
//       </header>

//       <section id="registration-form">
//         <h2>Patient Registration</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          
//           <label htmlFor="age">Age:</label>
//           <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
          
//           <label htmlFor="address">Address:</label>
//           <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          
//           {/* <label htmlFor="phone">Phone:</label>
//           <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//            */}
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
//           <div className="links">
//           <button type="submit"><Link to="/dashboard">Register</Link></button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Patients;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Patients() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/v1/patient/post-patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setFormData({
          name: '',
          age: '',
          address: '',
          email: ''
        });
        navigate('/patient-list');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <header>
        <h1>Telemedicine System</h1>
      </header>
      <section id="registration-form">
        <h2>Patient Registration</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
          
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          
          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  );
}

export default Patients;

