import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column brand-info">
          <div className="logo">
            <img src="/MPlogo.png" alt="Counseling Perspective Logo" /> {/* Placeholder for logo */}
            <span>Pathak Krishi Kendra</span>
          </div>
          <div className="association-badges">
            <div className="badge">
              {/* Placeholder for American Psychological Association logo */}
              <h3>Fertilizers <br/> Pesticides <br/> Inseceticides</h3>
            </div>
            <div className="badge">
              {/* Placeholder for EMDR Singapore logo */}
              <h3>City <br/> Bareilly</h3>
            </div>
            <div className="badge">
              {/* Placeholder for Singapore Psychological Society logo */}
              <h3>Fatehganj East <br/> Bareilly <br/> (Established 2012)</h3>
            </div>
          </div>
        </div>

        <div className="footer-column location-links">
          <h3>OUR LOCATIONS:</h3>
          <h4>Pathak Complex Station road Fatehganj east </h4>
          <p>Faridpur<br />Bareilly<br />243506</p>
          <h4>Pathak Krishi Kendra</h4>
          <p>All Items Available<br />Related to farming</p>
          <p>Call/Whatsapp: <span>+91 7017952312</span> or <span>+91 9719355312</span></p>
          <p>Email: <a href="mailto:info@counselingperspective.com">pathak.viresh426@gmail.com</a></p>
          <a href="#data-privacy-policy">Data Privacy Policy</a>
          <div className="social-icons">
            {/* Placeholders for social media icons */}
            <a href="#"><i className="fab fa-phone"></i></a>
            <a href="#"><i className="fab fa-envelope"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-column quick-links">
          <h3>Fertilizers</h3>
          <ul>
            <li><a href="#services">About Us</a></li>
            <li><a href="#mental-health">Products</a></li>
            <li><a href="#treatments">Media</a></li>
            <li><a href="#blog">News & Articles</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h3>Newsletter</h3>
          <input type="email" placeholder="Email Address" />
          <button>SUBSCRIBE</button>
          <div className="privacy-terms">
            {/* Placeholder for privacy-terms icon */}
            <span>Privacy - Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
