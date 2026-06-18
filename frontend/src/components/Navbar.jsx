import React, { useState } from "react";
import "./Navbar.css";
import EnquiryModal from "./EnquiryModal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">MWH</div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#destination">Destination</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#about">About Us</a></li>

          <li>
            <button
              className="enquiry-btn"
              onClick={() => setShowModal(true)}
            >
              Enquiry
            </button>
            
          </li>
        </ul>
      </nav>

      {showModal && (
        <EnquiryModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Navbar;