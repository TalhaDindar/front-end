import React, { useState } from "react";
import "../components/Calendar.css";

export default function Calendar({ selectedDate, setSelectedDate }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelect = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrev}>◀</button>
        <h3>
          {today.toLocaleString("default", { month: "long" })} {currentYear}
        </h3>
        <button onClick={handleNext}>▶</button>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="calendar-day-name">{d}</div>
        ))}
        {Array(firstDay).fill(null).map((_, i) => (
          <div key={`empty-${i}`} className="calendar-empty"></div>
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isSelected =
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear;

          return (
            <div
              key={day}
              className={`calendar-day ${isSelected ? "selected" : ""}`}
              onClick={() => handleSelect(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
