// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// export const PatientLi = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/v1/patient/get-patient')
//      .then((response) => {
//         setData(response.data);
//       })
//      .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:8080/api/v1/patient/${id}`)
//       .then((response) => {
//         setData(data.filter((item) => item.id !== id));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleUpdate = (id) => {
//     navigate(`/updatePatient/${id}`);
//   };

//   return (
//     <div className="PatientList">
//       <h2>Patient List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Address</th>
//             <th>Age</th>
//             <th>Email</th>
//             {/* <th>Phone</th> */}
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.address}</td>
//               <td>{item.age}</td>
//               <td>{item.email}</td>
//               {/* <td>{item.patientPhone}</td> */}
//               <td>
//                 <button type="button" style={{ backgroundColor: 'green', color: 'white' }} onClick={() => handleUpdate(item.id)}>Update</button>
//                 <button type="button" style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleDelete(item.id)}>Delete</button>
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

export const PatientList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/patient/get-patient')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/v1/patient/${id}`)
      .then((response) => {
        setData(data.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (id) => {
    navigate(`/updatePatient/${id}`);
  };

  return (
    <div className="PatientList">
      <h2>Patient List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
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
export default PatientList;
