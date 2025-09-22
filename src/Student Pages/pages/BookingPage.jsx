import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import TimeSlots from '../components/TimeSlots';

export default function BookingPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const canContinue = selectedDate && selectedTime;

  return (
    <div className="page-container">
      <h1 className="page-title">General Consultation</h1>

      <div className="card">
        <p className="section-title">Select date</p>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      <div className="card">
        <p className="section-title">Select timeslot</p>
        <TimeSlots selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      </div>

      <div style={{ marginTop: 12 }}>
        <button className="btn outline" onClick={() => navigate('/firstpage')}>Back</button>
        <button
          className="btn"
          disabled={!canContinue}
          onClick={() => navigate('/feedback')}
          style={{ opacity: canContinue ? 1 : 0.6, cursor: canContinue ? 'pointer' : 'not-allowed' }}
        >
          Continue to Feedback
        </button>
      </div>
    </div>
  );
}
