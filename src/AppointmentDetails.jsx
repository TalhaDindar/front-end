import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "./AppointmentDetails.css";


function AppointmentDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // Get appointment data from navigation state
  const appt = location.state;
  const [decision, setDecision] = useState("");

  // If no data (like refreshing page), show a fallback
  if (!appt) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No appointment details found</h2>
        <p>You may have refreshed the page or opened this URL directly.</p>
        <button onClick={() => navigate("/manage-appointments")}>
          Back to Manage Appointments
        </button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <h1>Appointment Details</h1>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Student No:</strong> {appt.studentNo}</p>
      <p><strong>Type:</strong> {appt.type}</p>
      <p><strong>Date:</strong> {appt.date}</p>
      <p><strong>Time:</strong> {appt.time}</p>
      <p><strong>Status:</strong> {appt.status}</p>

      <div className="decision-box">
        <h3>Approve or Decline</h3>
        <div>
          <label>
            <input
              type="radio"
              value="Approved"
              checked={decision === "Approved"}
              onChange={() => setDecision("Approved")}
            />
            Approve
          </label>
          <label style={{ marginLeft: "15px" }}>
            <input
              type="radio"
              value="Declined"
              checked={decision === "Declined"}
              onChange={() => setDecision("Declined")}
            />
            Decline
          </label>
        </div>
        <button
          onClick={() => {
            if (!decision) {
              alert("Please select approve or decline first.");
              return;
            }
            alert(
              `Appointment ${decision}. Sending email and SMS to student ${appt.studentNo}...`
            );
          }}
          style={{
            marginTop: "10px",
            padding: "8px 14px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send Notification
        </button>
      </div>
    </div>
  );
}

export default AppointmentDetails;
