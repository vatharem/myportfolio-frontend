import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center py-3"
      style={{
       
        color: "white",
        borderTop: "1px solid #00bfff",
      }}
    >
      <p className="mb-1">
        © {new Date().getFullYear()} <strong style={{ color: "#00bfff" }}>Mayuri</strong>. All Rights Reserved.
      </p>
      <p style={{ fontSize: "14px", color: "#ccc" }}>
        Built with 💙 using React & Spring Boot
      </p>
    </footer>
  );
};

export default Footer;
