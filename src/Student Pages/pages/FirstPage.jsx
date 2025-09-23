import React from 'react';
import '../pages/FirstPage.css';
import { useNavigate } from 'react-router-dom';
import Alerts from '../components/Alerts';

export default function FirstPage() 
{
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1 className="page-title">WELCOME, NWU STUDENT</h1>

      <div className="card">
        <h2>My Details</h2>
        <label>Student Number</label>
        <input className="input-field" type="text" placeholder="123456..." />
      </div>

      <Alerts />

      <h2 className="section-title">OUR SERVICES</h2>
      <p>View service options and understand payment rules effortlessly</p>

      <div className="grid-buttons">
        <button className="btn">General Consultation</button>
        <button className="btn">Vaccination</button>
        <button className="btn">Medical check-up</button>
      </div>

      <div style={{ marginTop: 24 }}>
        <button className="btn" onClick={() => navigate('/booking')}>Continue to Booking</button>
        <button className="btn outline" onClick={() => navigate('/')}>Logout</button>
      </div>
    </div>
  );
}
