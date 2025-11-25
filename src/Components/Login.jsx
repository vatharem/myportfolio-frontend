import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
          const API = process.env.REACT_APP_API_URL || "https://mayuri-portfolio-backend.onrender.com";



    

      const res = await axios.post(`${API}/api/users/login`, {email,password,});

      if (res.data.status === "success") {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setMessage("Login successful!");
        setTimeout(() => navigate("/hero"), 1000);
      } else {
        setMessage("Invalid email or password!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error logging in!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
      <div className="card bg-dark p-4 shadow" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3 text-light">Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control bg-secondary text-white mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control bg-secondary text-white mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-light w-100 mt-2">
            Login
          </button>
        </form>
        <p className="text-center mt-2">
          New user? <Link to="/register" className="text-info">Register</Link>
        </p>
        {message && <div className="alert alert-dark mt-2 text-center">{message}</div>}
      </div>
    </div>
  );
};

export default Login;
