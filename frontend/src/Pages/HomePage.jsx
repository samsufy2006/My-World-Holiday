import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="page-container">
      <Navbar className="navbar"/>

      <main className="content">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;