import React, { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPackages = () => {
    const packagesSection = document.getElementById("packages");

    if (packagesSection) {
      packagesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Carousel Image */}
      <img
        src={images[current]}
        alt="Travel Destination"
        className="hero-image"
      />

      {/* Hero Content */}
      <div className="hero-overlay">
        

        <h1>Create The Memories That Last Forever</h1>

        <p>Dream. Discover. Experience.</p>

        <button className="hero-btn" onClick={goToPackages}>
          Discover Packages
        </button>
        
      </div>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;