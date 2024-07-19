// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const AppointmentLi = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/v1/appointment/create')
//      .then((response) => {
//         setData(response.data);
//       })
//      .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/v1/patient/delete-appointment/${id}`)
//      .then((response) => {
//         setData(data.filter((item) => item.patientId!== id));
//       })
//      .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleUpdate = (id) => {
//     navigate(`/updateAppointment/${id}`);
//   };

//   return (
//     <div className="Appointment">
//       <h2>Booking List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Address</th>
//             <th>Age</th>
//             <th>Email</th>
//             <th>Gender</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.id}</td>
//               <td>{item.FullName}</td>
//               <td>{item.PatientEmail}</td>
//               <td>{item.date}</td>
//               <td>{item.gender}</td>
//               <td>{item.age}</td>
//               <td>{item.timeIn}</td>
//               <td>{item.timeOut}</td>
//               {/* <td>{item.patientPhone}</td> */}
//               <td>
//                 <button type="button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleUpdate(item.patientId)}>Update</button>
//                 <button type="button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleDelete(item.patientId)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppointmentList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/appointment/get-appointments')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/v1/appointment/delete-appointment/${id}`)
      .then(response => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting appointment:', error);
      });
  };

  const handleUpdate = (id) => {
    navigate(`/updateAppointment/${id}`);
  };

  return (
    <div className="AppointmentList">
      <h2>Appointment List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FullName</th>
            <th>PatientEmail</th>
            <th>Date</th>
            <th>Gender</th>
            <th>Age</th>
            <th>TimeIn</th>
            <th>TimeOut</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.Fullname}</td>
              <td>{item.PatientEmail}</td>
              <td>{item.date}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.timeIn}</td>
              <td>{item.timeOut}</td>
              <td>
                <button type="button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleUpdate(item.id)}>Update</button>
                <button type="button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AppointmentList;