<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ManageAppointments from "./ManageAppointments.jsx";
import AppointmentDetails from "./AppointmentDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/manage-appointments" element={<ManageAppointments />} />
      
      <Route path="/appointments/:id" element={<AppointmentDetails />} />
    </Routes>
  );
}

export default App;
=======
import React from 'react';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <AdminDashboard />
    </div>
  );
}

export default App
>>>>>>> 63bc5bc30988d1319bddbb889257d5f9a4d9966f
