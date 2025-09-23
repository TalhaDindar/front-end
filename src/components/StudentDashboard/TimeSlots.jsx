import React from "react";
import "../components/TimeSlots.css";

export default function TimeSlots({ selectedTime, setSelectedTime }) {
  const slots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
  ];

  return (
    <div className="timeslots">
      {slots.map((slot) => (
        <button
          key={slot}
          className={`slot-btn ${selectedTime === slot ? "active" : ""}`}
          onClick={() => setSelectedTime(slot)}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}
