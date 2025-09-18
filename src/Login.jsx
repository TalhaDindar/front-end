import React, {useState } from "react";

import "./Login.css";

import { useNavigate, Link } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);


        navigate("/manage-appointments");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Staff Login</h2>


                <label>Enter your username</label>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label>Enter your password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
                
                <p className="forgot-password">
                    <Link to="/forgot-password">Forgot password?</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;