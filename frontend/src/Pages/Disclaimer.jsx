import React from "react";
import "./Legal.css";

function Disclaimer() {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <h1 className="legal-title">
          Disclaimer
        </h1>

        <p className="legal-updated">
          Last Updated: June 2026
        </p>

        <p className="legal-intro">
          The information provided on <strong>www.myworldholidays.com</strong>
          is published in good faith and is intended for general informational
          purposes only. While My World Holidays™ strives to keep all
          information accurate and up to date, we make no warranties or
          guarantees regarding the completeness, reliability, or accuracy of
          any information available on this website.
        </p>

        {/* Information Accuracy */}

        <section className="legal-section">

          <h2>1. Information Accuracy</h2>

          <p>
            Travel information, pricing, availability, hotel details, airline
            schedules, visa requirements, and package inclusions may change
            without prior notice.
          </p>

          <p>
            Although we make every effort to provide accurate information,
            errors or omissions may occasionally occur. My World Holidays™
            reserves the right to correct any inaccuracies at any time.
          </p>

        </section>

        {/* Third Party */}

        <section className="legal-section">

          <h2>2. Third-Party Services</h2>

          <p>
            We work with independent airlines, hotels, transport providers,
            tour operators, cruise companies, insurance providers, visa
            agencies, and other travel partners.
          </p>

          <p>
            These organizations operate independently and are solely
            responsible for the services they provide.
          </p>

          <p>
            My World Holidays™ cannot be held responsible for delays,
            cancellations, overbooking, supplier insolvency, service
            deficiencies, or operational failures caused by third-party
            providers.
          </p>

        </section>

        {/* Pricing */}

        <section className="legal-section">

          <h2>3. Pricing & Availability</h2>

          <ul>

            <li>
              Prices shown on the website are subject to change without notice.
            </li>

            <li>
              Airfare, hotel rates, taxes, exchange rates, fuel surcharges,
              and supplier pricing may change at any time.
            </li>

            <li>
              Booking confirmation is subject to availability at the time of
              payment.
            </li>

          </ul>

        </section>

        {/* Visa */}

        <section className="legal-section">

          <h2>4. Visa & Travel Documentation</h2>

          <p>
            Visa approval is solely at the discretion of the respective
            embassy or consulate.
          </p>

          <p>
            My World Holidays™ provides visa assistance only and does not
            guarantee visa approval.
          </p>

          <p>
            Travelers are responsible for ensuring they possess valid
            passports, visas, permits, vaccination certificates, travel
            insurance, and all other required travel documentation.
          </p>

        </section>

        {/* Travel Advisory */}

        <section className="legal-section">

          <h2>5. Travel Advisory</h2>

          <p>
            Travelers should review the latest travel advisories, immigration
            requirements, health guidelines, and government regulations before
            departure.
          </p>

          <p>
            My World Holidays™ is not responsible for travel disruptions
            resulting from government restrictions, health emergencies, or
            changes in international travel policies.
          </p>

        </section>

        {/* External Links */}

        <section className="legal-section">

          <h2>6. External Links</h2>

          <p>
            Our website may contain links to external websites for your
            convenience.
          </p>

          <p>
            We do not control or endorse the content, services, or privacy
            practices of third-party websites and are not responsible for
            their content.
          </p>

        </section>

        {/* Liability */}

        <section className="legal-section">

          <h2>7. Limitation of Liability</h2>

          <p>
            My World Holidays™ shall not be liable for any direct, indirect,
            incidental, consequential, or special damages arising from the
            use of our website or travel services.
          </p>

          <ul>

            <li>Flight delays or cancellations</li>

            <li>Missed connections</li>

            <li>Hotel overbooking</li>

            <li>Loss of baggage</li>

            <li>Travel document issues</li>

            <li>Accidents or illness during travel</li>

            <li>Supplier-related operational issues</li>

          </ul>

        </section>

        {/* Force Majeure */}

        <section className="legal-section">

          <h2>8. Force Majeure</h2>

          <p>
            My World Holidays™ shall not be responsible for any delay,
            cancellation, loss, or failure to perform due to events beyond our
            reasonable control, including but not limited to:
          </p>

          <ul>

            <li>Natural disasters</li>

            <li>Pandemics</li>

            <li>Government restrictions</li>

            <li>Political unrest</li>

            <li>War</li>

            <li>Civil disturbances</li>

            <li>Strikes</li>

            <li>Weather conditions</li>

            <li>Transportation disruptions</li>

          </ul>

        </section>

        {/* Copyright */}

        <section className="legal-section">

          <h2>9. Copyright</h2>

          <p>
            All logos, branding, graphics, text, images, and website content
            are the intellectual property of My World Holidays™ unless
            otherwise stated.
          </p>

          <p>
            Unauthorized copying, reproduction, distribution, or modification
            of website content is strictly prohibited.
          </p>

        </section>

        {/* Changes */}

        <section className="legal-section">

          <h2>10. Changes to this Disclaimer</h2>

          <p>
            We reserve the right to update or modify this Disclaimer at any
            time without prior notice. The latest version will always be
            available on this page.
          </p>

        </section>

        {/* Contact */}

        <section className="legal-section">

          <h2>11. Contact Us</h2>

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

export default Disclaimer;