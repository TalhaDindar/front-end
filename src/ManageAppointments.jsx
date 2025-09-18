import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ManageAppointments.css";

function ManageAppointments() {
    const [selectedDate, setSelectedDate] = useState("");
    const [studentNo, setStudentNo] = useState("");
    const [status, setStatus] = useState("All Statuses");


    //-fake data hardcoded
    const appointments = [
        {
            id: 1,
            type: "General Consultation",
            studentNo: "20231234",
            date: "2025-08-24",
            time: "10:00",
            status: "Pending",
        },
        {
            id: 2,
            type: "Vaccination",
            studentNo: "20289654",
            date: "2025-08-24",
            time: "10:30",
            status: "Pending",
        },
        {
            id: 3,
            type: "Medical Check-Up",
            studentNo: "39071234",
            date: "2025-08-24",
            time: "10:45",
            status: "Pending",
        },
    ];

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Clinic Staff Dashboard</h1>
            <h2 className="dashboard-subtitle">Manage Appointments</h2>

            
            <div className="filters">
                <div className="filter-box">
                    
                    <input 
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>

                <div className="filter-box">
                    
                    <input 
                        type="text"
                        placeholder="Filter by student no"
                        value={studentNo}
                        onChange={(e) => setStudentNo(e.target.value)}
                    />
                </div>

                <div className="filter-box">
                    
                    <select 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option>All Statuses</option>
                        <option>General Consultation</option>
                        <option>Vaccination</option>
                        <option>Medical Check-Up</option>
                    </select>
                </div>
            </div>

            {/* Appointment Cards */}
            <div className="appointments-box">
                {appointments.map((appt) => (
                    <div className="appointment-card" key={appt.id}>
                        <div className="appointment-header">
                            <strong>{appt.type}</strong>
                            <span className="status-badge">{appt.status}</span>
                        </div>

                        <p><strong>Student No:</strong> {appt.studentNo}</p>
                        <hr />

                        <div className="appointment-footer">
                            <span>{appt.date}</span>
                            <span className="time">{appt.time}</span>
                        <Link
                            to={`/appointments/${appt.id}`}
                            state={appt}
                            className="details-btn"
                        >
                            View Details
                        </Link>   

                        </div>
                    </div>
                ))}
            </div>            
        </div>
    );
}

export default ManageAppointments;