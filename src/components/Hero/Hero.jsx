import React from 'react';
import TextType from './TextType';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img src="/hero.webp" alt="Background" className="hero-background-image" />
      </div>
      <div className="hero-text-container">
        <div className="hero-content">
          <TextType text="Har kisan ka bharosa, har fasal ka sahara." as="h1" className="hero-title" />
          <div className="hero-buttons">
            <button className="btn btn-primary">Meet the Founder</button>
            <button className="btn btn-secondary">Visit Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
