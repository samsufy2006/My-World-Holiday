import React from "react";
import "./EnquiryModal.css";

function EnquiryModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your enquiry has been submitted.");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Plan Your Dream Trip</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            placeholder="Destination to Explore"
            required
          />

          <input
            type="number"
            placeholder="Number of Travelers"
            min="1"
          />

          <textarea
            rows="4"
            placeholder="Tell us about your travel plans..."
          />

          <button type="submit" className="submit-btn">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryModal;