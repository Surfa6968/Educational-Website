import React from "react";
import { useNavigate } from "react-router-dom";
import "./authChoice.css";

const AuthChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Welcome!</h2>
      <p>Please choose an option to continue:</p>
      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default AuthChoice;