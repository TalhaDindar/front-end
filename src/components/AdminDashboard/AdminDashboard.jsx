import React, { useState } from 'react';
import './AdminDashboard.css';
import { 
  Users, 
  Lock, 
  Settings, 
  MessageSquare, 
  HelpCircle, 
  Megaphone, 
  CalendarCheck, 
  CheckCircle, 
  UserCircle, 
  Activity 
} from 'lucide-react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Student A', email: 'studentA@nwu.ac.za', role: 'Student', status: 'Active' },
    { id: 2, name: 'Dr. B', email: 'drb@nwu.ac.za', role: 'Staff', status: 'Active' },
    { id: 3, name: 'Student C', email: 'studentC@nwu.ac.za', role: 'Student', status: 'Active' },
    { id: 4, name: 'Admin User', email: 'admin@nwu.ac.za', role: 'Admin', status: 'Active' }
  ]);

  const [settings, setSettings] = useState({
    dailyLimit: 50,
    bookingRules: 'Appointments must be booked at least 12 hours in advance.'
  });

  const [faqs] = useState([
    { question: 'How do I book an appointment?', answer: 'Navigate to the dashboard, enter your details, and click "Book an Appointment".' },
    { question: 'Is there a cost for consultations?', answer: 'General consultations are free for students. Certain services may have a fee.' },
    { question: 'How do I cancel an appointment?', answer: 'Go to "My Bookings", find the appointment you want to cancel, and click the cancel button.' },
    { question: 'How can I update my profile details?', answer: 'Click on the profile icon in the navigation bar to access your profile settings and make changes.' }
  ]);

  const [feedbacks] = useState([
    { id: 1, userName: 'Student A', content: 'The waiting times are too long.', status: 'Pending' },
    { id: 2, userName: 'Student C', content: 'The online booking system is very convenient!', status: 'Moderated' }
  ]);

  const [announcement, setAnnouncement] = useState('');
  const [selectedCampuses, setSelectedCampuses] = useState(['All Campuses']);

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id 
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } 
        : user
    ));
  };

  const toggleCampus = (campus) => {
    if (campus === 'All Campuses') {
      setSelectedCampuses(['All Campuses']);
    } else {
      const newCampuses = selectedCampuses.includes('All Campuses')
        ? [campus]
        : selectedCampuses.includes(campus)
          ? selectedCampuses.filter(c => c !== campus)
          : [...selectedCampuses, campus];
      setSelectedCampuses(newCampuses.length > 0 ? newCampuses : ['All Campuses']);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <Users size={28} style={{ marginRight: '10px' }} />
        <h1>Administrator Dashboard</h1>
      </header>

      <div className="dashboard-container">
        {/* Statistics Section */}
        <div className="stats-section">
          <div className="stat-card purple">
            <CalendarCheck size={28} />
            <h3>Total Bookings</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card green">
            <CheckCircle size={28} />
            <h3>Completed</h3>
            <p className="stat-number">0</p>
          </div>
          <div className="stat-card blue">
            <UserCircle size={28} />
            <h3>Total Users</h3>
            <p className="stat-number">4</p>
          </div>
          <div className="stat-card orange">
            <Activity size={28} />
            <h3>Popular Service</h3>
            <p className="stat-number">9</p>
            <p className="stat-desc">Medical Check-up</p>
          </div>
        </div>

        <div className="main-content">
          {/* User Management */}
          <div className="content-section user-management-section">
            <div className="section-header">
              <Users size={20} />
              <h2>Manage Users</h2>
            </div>
            <div className="user-table">
              <div className="table-header">
                <div className="table-cell">NAME</div>
                <div className="table-cell">EMAIL</div>
                <div className="table-cell">ROLE</div>
                <div className="table-cell">STATUS</div>
                <div className="table-cell">ACTIONS</div>
              </div>
              {users.map(user => (
                <div key={user.id} className="table-row">
                  <div className="table-cell" data-label="NAME">{user.name}</div>
                  <div className="table-cell" data-label="EMAIL">{user.email}</div>
                  <div className="table-cell" data-label="ROLE">{user.role}</div>
                  <div className="table-cell" data-label="STATUS">
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </div>
                  <div className="table-cell actions-cell" data-label="ACTIONS">
                    <button 
                      className="action-btn toggle-btn"
                      onClick={() => toggleUserStatus(user.id)}
                      title="Toggle Status"
                    >
                      ↔️
                    </button>
                    <button 
                      className="action-btn lock-btn"
                      title="Reset Password"
                    >
                      🔒
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Settings */}
          <div className="content-section">
            <div className="section-header">
              <Settings size={20} />
              <h2>System Settings</h2>
            </div>
            <div className="settings-group">
              <label>Daily Appointment Limit</label>
              <input 
                type="number" 
                value={settings.dailyLimit} 
                onChange={(e) => setSettings({...settings, dailyLimit: e.target.value})}
              />
            </div>
            <div className="settings-group">
              <label>Booking Rules</label>
              <textarea 
                value={settings.bookingRules} 
                onChange={(e) => setSettings({...settings, bookingRules: e.target.value})}
              />
            </div>
            <button className="save-btn">Save Settings</button>
          </div>

          {/* Feedback */}
          <div className="content-section">
            <div className="section-header">
              <MessageSquare size={20} />
              <h2>Moderate Feedback</h2>
            </div>
            <div className="feedback-list">
              {feedbacks.map(feedback => (
                <div key={feedback.id} className="feedback-item">
                  <div className="feedback-header">
                    <strong>{feedback.userName}</strong>
                  </div>
                  <p>"{feedback.content}"</p>
                  <div className="feedback-status">
                    {feedback.status === 'Moderated' && '✔️'} ({feedback.status})
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="content-section">
            <div className="section-header">
              <HelpCircle size={20} />
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search for a question..." />
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="content-section">
            <div className="section-header">
              <Megaphone size={20} />
              <h2>Clinic Announcements</h2>
            </div>
            <textarea 
              placeholder="Enter a new announcement..."
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              className="announcement-input"
            />
            <div className="campus-selection">
              <label>Select Campuses:</label>
              <div className="campus-options">
                {['Potchefstroom', 'Vanderbijpark', 'Mahikeng', 'All Campuses'].map(campus => (
                  <label key={campus} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedCampuses.includes(campus)}
                      onChange={() => toggleCampus(campus)}
                    />
                    {campus}
                  </label>
                ))}
              </div>
            </div>
            <button className="post-btn">Post Announcement</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
