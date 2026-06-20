import React, { useEffect, useState } from "react";
import "./Hero.css";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
  "/images/img8.png"
  
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPackages = () => {
    const packagesSection = document.getElementById("packages");

    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <img
          src={images[current]}
          alt="Travel Destination"
          className="hero-image"
        />

        <div className="hero-overlay">
          <h1>Creating Memories That Lasts Forever</h1>
          <p>Dream. Discover. Experience.</p>

          <button className="hero-btn" onClick={goToPackages}>
            Discover Packages
          </button>
        </div>

        {/* dots */}
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

      {/* 👉 IMAGE BELOW CAROUSEL */}
      <div className="hero-bottom-image">
        <img src="/images/hero-bottom.jpeg" alt="hero bottom" />
      </div>
    </>
  );
}

export default Hero;