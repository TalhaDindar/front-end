import React, { useState } from "react";
import "./Login.css";

import { Link } from "react-router-dom";

function ForgotPassword() {
    const [username, setUsername] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert("New passwords do not match!");
            return;
        }

        console.log("Username:", username);
        console.log("Old Password:", oldPassword);
        console.log("New Password:", newPassword);
        alert("Password Successfully reset!");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>

                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter your old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />

                  <input
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />

                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">Reset Password</button>

                <p className="back-to-login">
                    <Link to="/">Back to login</Link>
                </p>
            </form>
        </div>
    );
}

export default ForgotPassword;