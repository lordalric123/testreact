import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer custom-nav">
      <div className="footer-container ">
        <div className="footer-content">
          <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          <ul className="footer-links">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
