import React from 'react';
import './Locations.css';

const Locations = () => {
  return (
    <div className="locations-section">
      <div className="locations-header">
        <div className="heart-icon">❤</div> {/* Placeholder for heart icon */}
        <h2>Find Our Location Nearest You</h2>
        <p>Pathak Krishi Kendra Fatehganj east,Bareilly</p>
      </div>
      <div className="location-cards-container">
        <div className="location-card yellow-card">
          <div className="location-icon">📍</div>
          <h3>Pathak Krishi Kendra</h3>
          <p>Pathak Complex station road Fatehganj east<br />Faridpur, Bareilly 243506</p>
        </div>
        <div className="location-card pink-card">
          <div className="location-icon">📍</div>
          <h3>Near Gour Cycle Store</h3>
          <p>In front to Singhal Medical Store<br />Fatehganj East 243506</p>
        </div>
      </div>
      <div className="contact-info">
        <p>Reach out for support anytime between <span>7:30 AM and 9:00 PM</span> via WhatsApp at <span>+91 7017952312</span> or <span>+91 9719355312</span></p>
      </div>
    </div>
  );
};

export default Locations;
