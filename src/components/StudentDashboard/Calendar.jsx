import React from 'react';

function Calendar({ selectedDate, setSelectedDate }) {
  return (
    <div className="calendar">
      <h3>CALENDAR</h3>
      <table>
        <thead>
          <tr>
            <th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: 7 }).map((_, colIdx) => {
                const dayNum = rowIdx * 7 + colIdx + 1;
                if (dayNum > 31) return <td key={colIdx}></td>;
                return (
                  <td
                    key={colIdx}
                    className={selectedDate === dayNum ? 'selected' : ''}
                    onClick={() => setSelectedDate(dayNum)}
                  >
                    {dayNum}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
