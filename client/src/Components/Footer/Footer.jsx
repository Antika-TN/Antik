import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import './Style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
        
          <span className="logo-text">Antika</span>
        </div>
        <div className="website-info-section">
          <h4 className="section-title">Website Information</h4>
          <p>Address: 123 Main Street, City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="contact-section">
          <h4 className="section-title">Contact Us</h4>
          <p>
            <a href="/about">About Us</a>
          </p>
          <p>
            <a href="/contact">Contact Us</a>
          </p>
          <div className="social-media">
          <FaFacebook className="social-icon facebook-icon" />
            <BsInstagram className="social-icon instagram-icon" />
            <AiOutlineYoutube className="social-icon youtube-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
