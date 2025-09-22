import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

export default function FeedbackPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1 className="page-title">SHARE YOUR FEEDBACK</h1>
      <p>Your input helps us improve. Please share your thoughts on your clinic experience.</p>

      <div className="card">
        <FeedbackForm />
      </div>

      <div style={{ marginTop: 12 }}>
        <button className="btn outline" onClick={() => navigate('/booking')}>Back to Booking</button>
        <button className="btn" onClick={() => navigate('/')}>Finish & Logout</button>
      </div>
    </div>
  );
}
