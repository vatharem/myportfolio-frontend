import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
       const API = process.env.REACT_APP_API_URL || "https://mayuri-portfolio-backend.onrender.com";

      await axios.post(`${API}/api/contact`, formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      // Optional local storage save
      const oldMessages = JSON.parse(localStorage.getItem("messages")) || [];
      oldMessages.push(formData);
      localStorage.setItem("messages", JSON.stringify(oldMessages));
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-5 text-white" style={{ backgroundColor: '#0d1117' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-info mb-2" style={{ fontSize: "2.8rem", textShadow: "0 0 15px rgba(0,191,255,0.7)" }}>Get in Touch</h2>
          <p className="lead text-light opacity-75">Have a project in mind or just want to say hi? I'd love to hear from you!</p>
        </div>

        <div className="row align-items-start g-4">
          <div className="col-md-4">
            <div className="p-4 rounded-4 shadow-lg" style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(0,191,255,0.3)" }}>
              <h4 className="text-info mb-3 fw-bold">Why Contact Me?</h4>
              <ul className="list-unstyled text-white">
                <li>• You need a reliable full stack developer</li>
                <li>• Want to collaborate on a creative project</li>
                <li>• Need a portfolio or business website</li>
                <li>• Just want to say hello!</li>
              </ul>
              <p className="text-secondary mt-4 mb-0" style={{ fontSize: "0.9rem" }}>I'll do my best to respond within 24 hours.</p>
            </div>
          </div>

          <div className="col-md-8">
            <form className="p-4 rounded-4 shadow-lg" onSubmit={handleSubmit} style={{ background: "rgba(13,17,23,0.8)", border: "1px solid rgba(0,191,255,0.3)" }}>
              <div className="mb-3">
                <label className="form-label fw-semibold text-info">Your Name</label>
                <input type="text" className="form-control bg-secondary text-white border-0" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold text-info">Email address</label>
                <input type="email" className="form-control bg-secondary text-white border-0" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold text-info">Message</label>
                <textarea className="form-control bg-secondary text-white border-0" rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn w-100 fw-bold" style={{ backgroundColor: "#00bfff", color: "#000" }} disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && <p className="mt-2 text-center">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
