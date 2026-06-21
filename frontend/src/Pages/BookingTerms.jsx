import React from "react";
import "./Legal.css";

function BookingTerms() {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <h1 className="legal-title">
          Booking Terms & Conditions
        </h1>

        <p className="legal-updated">
          Last Updated: June 2026
        </p>

        <p className="legal-intro">
          These Booking Terms & Conditions govern all bookings made through
          <strong> My World Holidays™</strong>. By confirming a booking with us,
          you acknowledge that you have read, understood, and agreed to these
          terms.
        </p>

        {/* Booking Confirmation */}

        <section className="legal-section">

          <h2>1. Booking Confirmation</h2>

          <ul>

            <li>
              All bookings are subject to availability and confirmation from
              the respective airline, hotel, tour operator, transport provider,
              or other travel service provider.
            </li>

            <li>
              A booking is considered confirmed only after the required payment
              has been received.
            </li>

            <li>
              Confirmation vouchers, tickets, or itineraries will be issued
              after successful confirmation.
            </li>

            <li>
              Prices and availability remain subject to change until the
              booking is confirmed.
            </li>

          </ul>

        </section>

        {/* Customer Information */}

        <section className="legal-section">

          <h2>2. Customer Information</h2>

          <p>
            Customers are responsible for providing complete and accurate
            information, including:
          </p>

          <ul>

            <li>Passenger Names</li>

            <li>Date of Birth</li>

            <li>Mobile Number</li>

            <li>Email Address</li>

            <li>Passport Details</li>

            <li>Visa Information (where applicable)</li>

          </ul>

          <p>
            Any costs arising due to incorrect information provided by the
            customer shall be the sole responsibility of the customer.
          </p>

        </section>

        {/* Payment */}

        <section className="legal-section">

          <h2>3. Payment Terms</h2>

          <ul>

            <li>
              Full or partial payment may be required depending on the booking.
            </li>

            <li>
              Failure to pay within the specified time may result in automatic
              cancellation.
            </li>

            <li>
              Payments may be made through approved online payment methods,
              UPI, bank transfer, debit cards, credit cards, or other accepted
              payment options.
            </li>

          </ul>

        </section>

        {/* Pricing */}

        <section className="legal-section">

          <h2>4. Pricing</h2>

          <ul>

            <li>
              Prices are subject to availability.
            </li>

            <li>
              Airfare, hotel rates, taxes, exchange rates, fuel surcharges,
              and supplier pricing may change without notice.
            </li>

            <li>
              Any increase imposed by suppliers before confirmation may be
              passed on to the customer.
            </li>

          </ul>

        </section>

        {/* Documents */}

        <section className="legal-section">

          <h2>5. Travel Documents</h2>

          <ul>

            <li>
              Customers are responsible for carrying valid passports, visas,
              permits, vaccination certificates, travel insurance, and other
              required travel documents.
            </li>

            <li>
              My World Holidays™ shall not be responsible for losses arising
              due to incomplete or invalid documentation.
            </li>

          </ul>

        </section>

        {/* Cancellation */}

        <section className="legal-section">

          <h2>6. Cancellations & Amendments</h2>

          <ul>

            <li>
              Cancellation requests must be submitted through our official
              communication channels.
            </li>

            <li>
              Refund eligibility depends on the policies of airlines, hotels,
              and other suppliers.
            </li>

            <li>
              Service charges paid to My World Holidays™ may be
              non-refundable.
            </li>

          </ul>

        </section>

        {/* Insurance */}

        <section className="legal-section">

          <h2>7. Travel Insurance</h2>

          <p>
            Travel insurance is strongly recommended for all travelers.
          </p>

          <p>
            Unless specifically included in your package, travel insurance
            must be purchased separately by the customer.
          </p>

        </section>

        {/* Supplier */}

        <section className="legal-section">

          <h2>8. Supplier Responsibility</h2>

          <p>
            Airlines, hotels, cruise operators, transport providers, and other
            travel suppliers operate independently.
          </p>

          <p>
            My World Holidays™ acts solely as an intermediary and shall not be
            liable for delays, cancellations, overbooking, supplier
            deficiencies, strikes, or operational issues.
          </p>

        </section>

        {/* Force */}

        <section className="legal-section">

          <h2>9. Force Majeure</h2>

          <p>
            We shall not be responsible for delays, cancellations, losses, or
            changes resulting from circumstances beyond our reasonable control,
            including:
          </p>

          <ul>

            <li>Natural Disasters</li>

            <li>Pandemics</li>

            <li>Government Restrictions</li>

            <li>Political Unrest</li>

            <li>War</li>

            <li>Strikes</li>

            <li>Weather Conditions</li>

            <li>Transportation Disruptions</li>

          </ul>

        </section>

        {/* Liability */}

        <section className="legal-section">

          <h2>10. Limitation of Liability</h2>

          <ul>

            <li>
              Our liability shall not exceed the amount paid for the booking.
            </li>

            <li>
              We are not liable for indirect, incidental, or consequential
              damages.
            </li>

          </ul>

        </section>

        {/* Conduct */}

        <section className="legal-section">

          <h2>11. Customer Conduct</h2>

          <p>
            Travelers are expected to comply with all airline rules, hotel
            policies, destination laws, immigration requirements, and local
            regulations.
          </p>

          <p>
            Any penalties or losses arising from misconduct shall be the sole
            responsibility of the traveler.
          </p>

        </section>

        {/* Law */}

        <section className="legal-section">

          <h2>12. Governing Law</h2>

          <p>
            These Booking Terms & Conditions shall be governed by the laws of
            India.
          </p>

          <p>
            Any disputes shall be subject to the exclusive jurisdiction of the
            courts located in Delhi, India.
          </p>

        </section>

        {/* Contact */}

        <section className="legal-section">

          <h2>13. Contact Us</h2>

          <div className="contact-box">

            <p><strong>My World Holidays LLP</strong></p>

            <p>📍 New Delhi, India</p>

            <p>📞 +91 9971912748</p>

            <p>✉ hello@myworldholidays.com</p>

            <p>🌐 www.myworldholidays.com</p>

            <p>GSTIN: 07ACHFM5339D1Z9</p>

          </div>

        </section>

      </div>
    </div>
  );
}

export default BookingTerms;