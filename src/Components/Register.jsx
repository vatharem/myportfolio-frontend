import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const API = process.env.REACT_APP_API_URL || "https://mayuri-portfolio-backend.onrender.com";

      const res = await axios.post(`${API}/api/users/register`, {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      if (res.data.status === "success") {
        setMessage("User registered successfully!");
        setTimeout(() => navigate("/"), 1000);
      } else if (res.data.status === "exists") {
        setMessage("User already exists! Please login.");
      } else {
        setMessage("Registration failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Registration failed. Try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
      <div className="card bg-dark p-4 shadow" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3 text-light">Register</h3>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="form-control bg-secondary text-white mb-2"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="form-control bg-secondary text-white mb-2"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control bg-secondary text-white mb-2"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control bg-secondary text-white mb-2"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-light w-100 mt-2">
            Register
          </button>
        </form>
        <p className="text-center mt-2">
          Already have an account? <Link to="/" className="text-info">Login</Link>
        </p>
        {message && <div className="alert alert-dark mt-2 text-center">{message}</div>}
      </div>
    </div>
  );
};

export default Register;
