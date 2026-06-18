import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Let's Plan Your Dream Vacation</h1>

        <p>
          Tell us about your travel plans and our team will help you create
          the perfect trip.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />

          <input type="email" placeholder="Email Address" required />

          <input type="tel" placeholder="Phone Number" required />

          <input type="text" placeholder="Destination to Explore" required />

          <input
            type="number"
            placeholder="Number of Travelers"
            min="1"
            required
          />

          <input type="text" placeholder="Budget Range" />

          <textarea
            rows="5"
            placeholder="Tell us more about your travel requirements..."
          />

          <button type="submit">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;