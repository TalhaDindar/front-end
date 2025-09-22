import React, { useState } from 'react';

function TimeSlots() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const slots = ["09:00", "10:00", "11:00", "14:00", "15:00"];

  return (
    <div className="timeslots">
      {slots.map((slot, index) => (
        <div
          key={index}
          className={`slot ${selectedSlot === slot ? 'selected' : ''}`}
          onClick={() => setSelectedSlot(slot)}
        >
          {slot}
        </div>
      ))}
    </div>
  );
}

export default TimeSlots;
