import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/About";

// Legal Pages
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import RefundPolicy from "./Pages/RefundPolicy";
import BookingTerms from "./Pages/BookingTerms";
import Disclaimer from "./Pages/Disclaimer";

// Uncomment after creating these pages
// import FAQ from "./Pages/FAQ";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Legal Pages */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms-and-conditions"
          element={<TermsConditions />}
        />

        <Route
          path="/refund-cancellation"
          element={<RefundPolicy />}
        />

        <Route
          path="/booking-terms"
          element={<BookingTerms />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Uncomment after creating FAQ page */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;