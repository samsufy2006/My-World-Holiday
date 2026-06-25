import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-section">

          <h2 className="footer-logo">
            <h2>
  My World Holidays<sup>™</sup>
</h2>
          </h2>

          <p>
            Your trusted travel partner for unforgettable domestic and
            international holidays, flight bookings, hotel reservations,
            visa assistance, and customized travel experiences.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About Us</Link></li>

            <li><Link to="/contact">Contact Us</Link></li>

            <li><Link to="/faq">FAQ</Link></li>

          </ul>

        </div>

        {/* Services */}

        <div className="footer-section">

          <h3>Services</h3>

          <ul>

            <li>Flight Bookings</li>

            <li>Hotel Reservations</li>

            <li>Holiday Packages</li>

            <li>Visa Assistance</li>

            <li>Corporate Travel</li>

          </ul>

        </div>

        {/* Legal */}

        <div className="footer-section">

          <h3>Legal</h3>

          <ul>

            <li>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link to="/refund-cancellation">
                Refund Policy
              </Link>
            </li>

            <li>
              <Link to="/booking-terms">
                Booking Terms
              </Link>
            </li>

            <li>
              <Link to="/disclaimer">
                Disclaimer
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact Us</h3>

          <p>📍 New Delhi, India</p>

          <p>📞 +91 99719 12748</p>

          <p>✉ hello@myworldholidays.com</p>

          <p>GSTIN: 07ACHFM5339D1Z9</p>

          <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>

          </div>

        </div>

      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} <strong>My World Holidays LLP</strong>.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <strong>Ravi Singh</strong>
        </p>

      </div>

    </footer>
  );
}

export default Footer;