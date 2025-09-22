import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.premventDefault();
    // after login go to FirstPage (must match the route EXACTLY)
   if (email && password) {
      navigate("/FirstPage");
    } else {
      alert("Please enter email and password");
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    alert("Account creation not implemented yet!");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleLogin}>
          <input 
              type="email" 
             placeholder="Email Address" 
            className="login-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            />
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
}
