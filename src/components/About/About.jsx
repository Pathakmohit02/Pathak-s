import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      
      <div className="about-content">
        <div className="about-image-container">
          <img src="/Main.png" alt="Yi Shan" className="about-image" />
        </div>
        <div className="about-text-container">
        <h2>About Us</h2>
          <p>Pathak Krishi Kendra is a trusted agricultural store dedicated to supporting farmers with high-quality fertilizers, seeds, pesticides, and modern farming solutions. Our mission is to help every farmer increase productivity, improve soil health, and achieve a better harvest with reliable and scientifically tested products.</p>
          <p>At Pathak Krishi Kendra, we believe that good farming starts with good inputs. That’s why we provide a wide range of fertilizers, crop nutrition products, soil-health boosters, plant protection chemicals, and expert guidance to ensure farmers get the best results from their fields.</p>
          <p>The shop is proudly owned by  Mr. Viresh Kumar Pathak, a farmer-focused professional who understands the challenges of agriculture from ground level. With deep knowledge of soil health, crop requirements, and seasonal farming needs, he guides farmers in choosing the right products for their crops.</p>
          <p>His goal is simple:
“Better inputs for farmers, better harvest for every household.”<br/>

Mr. Pathak is known for his honesty, friendly nature, and commitment to helping farmers achieve higher yields with proper advice and quality products</p>
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
