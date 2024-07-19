// import React, { useState } from 'react';

// const BookingForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [message, setMessage] = useState('');


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add the logic to submit the form data
//     console.log({
//       name,
//       email,
//       date,
//       time, 
//       message
//     });
//     // Clear the form fields
//     setName('');
//     setEmail('');
//     setDate('');
//     setTime('');
//     setMessage('');
    
//   };

//   return (
//     <div>
//       <h2>Schedule an Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="time">Time:</label>
//           <input
//             type="time"
//             id="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//         </div>
//         <button type="submit">Schedule Appointment</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      email,
      date,
      time,
      message
    };

    axios.post('http://localhost:8080/api/v1/appointment/post-appointment', appointmentData)
      .then(response => {
        console.log('Appointment booked:', response.data);
        // Clear the form fields
        setName('');
        setEmail('');
        setDate('');
        setTime('');
        setMessage('');
        // Redirect to the appointment list page
        navigate('/appointment-list');
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
      });
  };

  return (
    <div>
      <h2>Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
  );
};

export default BookingForm;
