import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

import Dashboard from './component/Dashboard';
import  { AppointmentLi, AppointmentList } from './pages/AppointmentList';
import Patients from './pages/Patients';
import PatientList from './pages/PatientList';
// import { PatientLi } from './pages/PatientList';
import BookingForm from './pages/BookingForm';
import AddminDash from './component/AddminDash';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='appointment' element={<AppointmentList />} /> 
          <Route path='patients' element={<Patients />} />
          {/* <Route path='patient-list' element={<PatientLi />} />  */}
         <Route path='patient-list' element={<PatientList/>} />
          <Route path='bookingform'element={<BookingForm/>}/>
          <Route path='addminDash' element={<AddminDash />} />

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;