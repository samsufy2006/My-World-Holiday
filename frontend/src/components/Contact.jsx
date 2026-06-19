import React from "react";
import "./Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const destination = e.target[3].value;
    const travelers = e.target[4].value;
    const budget = e.target[5].value;
    const message = e.target[6].value;

    const date = new Date().toLocaleString();

    const whatsappMessage = `
📩 New Travel Enquiry

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🌍 Destination: ${destination}
👥 Travelers: ${travelers}
💰 Budget: ${budget}
📝 Message: ${message}
📅 Date: ${date}
`;

    const phoneNumber = "919717131xxx"; // 👉 Replace with your WhatsApp number

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

    // optional reset form
    e.target.reset();
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