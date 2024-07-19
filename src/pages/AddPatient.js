// import React, { useState } from 'eact';
import React, { useState } from 'react';
import axios from 'axios';

const AddPatient= () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const patient = {
        name,
        address,
        age,
        email,
        phone,
      };
      const response = await axios.post('http://localhost:8080/api/v1/patient/post-patient', patient);
      console.log(response.data);
      // Reset the form fields
      setName('');
      setAddress('');
      setAge('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error adding patient', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatient;