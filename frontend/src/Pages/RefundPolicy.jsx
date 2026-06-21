import React from "react";
import "./Legal.css";

function RefundPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <h1 className="legal-title">
          Refund & Cancellation Policy
        </h1>

        <p className="legal-updated">
          Last Updated: June 2026
        </p>

        <p className="legal-intro">
          At <strong>My World Holidays™</strong>, we act as a travel booking
          facilitator for flights, hotels, holiday packages, visa assistance,
          and other travel-related services. Cancellation and refund policies
          vary depending on the respective airline, hotel, tour operator,
          transport provider, or other supplier.
        </p>

        {/* Flight Bookings */}

        <section className="legal-section">

          <h2>1. Flight Bookings</h2>

          <ul>

            <li>
              Flight cancellations and refunds are subject to the respective
              airline's fare rules and cancellation policy.
            </li>

            <li>
              Cancellation charges imposed by the airline will be deducted from
              the refundable amount.
            </li>

            <li>
              Convenience fees, service charges, and payment gateway charges
              are generally non-refundable unless otherwise stated.
            </li>

            <li>
              Refund processing usually takes between 7 and 30 working days
              after approval by the airline.
            </li>

          </ul>

        </section>

        {/* Hotel */}

        <section className="legal-section">

          <h2>2. Hotel Bookings</h2>

          <ul>

            <li>
              Hotel cancellations are governed by the cancellation policy of
              the booked property.
            </li>

            <li>
              Certain hotel bookings may be non-refundable.
            </li>

            <li>
              Cancellation charges may apply depending on the hotel policy.
            </li>

            <li>
              Refunds, where applicable, will be processed only after
              confirmation from the hotel.
            </li>

          </ul>

        </section>

        {/* Holiday */}

        <section className="legal-section">

          <h2>3. Holiday Packages</h2>

          <ul>

            <li>
              Cancellation charges vary depending on the destination,
              supplier, travel date, and package type.
            </li>

            <li>
              Visa fees, insurance premiums, supplier deposits, and
              third-party charges are generally non-refundable.
            </li>

            <li>
              Applicable cancellation charges will be communicated at the
              time of cancellation.
            </li>

          </ul>

        </section>

        {/* Refund */}

        <section className="legal-section">

          <h2>4. Refund Process</h2>

          <ul>

            <li>
              Approved refunds will be credited to the original payment
              method wherever possible.
            </li>

            <li>
              Refund timelines depend on airlines, hotels, banks, payment
              gateways, and other suppliers.
            </li>

            <li>
              Processing time may vary based on the respective service
              provider.
            </li>

            <li>
              My World Holidays™ is not responsible for delays caused by
              third-party providers.
            </li>

          </ul>

        </section>

        {/* Amendments */}

        <section className="legal-section">

          <h2>5. Amendments & Rescheduling</h2>

          <ul>

            <li>
              Date changes, passenger name corrections, destination changes,
              and other amendments are subject to supplier approval.
            </li>

            <li>
              Additional airline fare differences or supplier charges may
              apply.
            </li>

            <li>
              Service charges may also be applicable depending on the nature
              of the modification.
            </li>

          </ul>

        </section>

        {/* Non Refundable */}

        <section className="legal-section">

          <h2>6. Non-Refundable Charges</h2>

          <p>
            The following charges are generally non-refundable unless
            specifically mentioned otherwise:
          </p>

          <ul>

            <li>Visa Processing Fees</li>

            <li>Travel Insurance Premiums</li>

            <li>Payment Gateway Charges</li>

            <li>Convenience Fees</li>

            <li>Service Charges</li>

            <li>Supplier Cancellation Charges</li>

          </ul>

        </section>

        {/* Customer */}

        <section className="legal-section">

          <h2>7. Customer Responsibilities</h2>

          <ul>

            <li>
              Carefully review cancellation terms before confirming any
              booking.
            </li>

            <li>
              Submit cancellation requests through our official
              communication channels.
            </li>

            <li>
              Ensure all booking information provided is accurate.
            </li>

          </ul>

        </section>

        {/* Company */}

        <section className="legal-section">

          <h2>8. Our Responsibility</h2>

          <p>
            My World Holidays™ acts solely as an intermediary between
            customers and travel service providers.
          </p>

          <p>
            Refund approvals are governed by the policies of airlines,
            hotels, tour operators, transport providers, visa agencies,
            and other suppliers.
          </p>

        </section>

        {/* Contact */}

        <section className="legal-section">

          <h2>9. Contact Us</h2>

          <div className="contact-box">

            <p>
              <strong>My World Holidays LLP</strong>
            </p>

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

export default RefundPolicy;