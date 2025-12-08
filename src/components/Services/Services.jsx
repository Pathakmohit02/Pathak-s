import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-section">

      <div className="services-content">
      <div className="services-image-container">
          <img src="/service.jpg" alt="Our Services" className="services-image" />
        </div>
        <div className="services-text-container">
          <h2>Our Services</h2>
          <p>At Counseling Perspective, we provide compassionate, personalized therapy services to help people of all age groups and backgrounds overcome life's challenges and thrive. Our group and individual counselling services include:</p>
          <ul>
            <li><strong className="service-heading">Marriage Counselling</strong> - Relationship counselling addresses difficulties between partners and helps them to better understand and support each other.</li>
            <li><strong className="service-heading">Family Counselling</strong> - Family therapy helps navigate challenging family dynamics and improve relationships within the family unit.</li>
            <li><strong className="service-heading">Child Counselling</strong> - Child therapy provides a supportive space for children to express their emotions, develop coping skills, and build self-esteem.</li>
            <li><strong className="service-heading">Career Counselling</strong> - Career coaching helps professionals grow their strengths, identify opportunities, and make informed career decisions.</li>
            <li><strong className="service-heading">Online Counselling</strong> - Private, convenient online counseling video sessions are available to both our Singapore-based and international clients.</li>
            <li><strong className="service-heading">LGBTQIA+ Counselling</strong> - LGBTQIA+ therapy offers a safe and supportive space for those exploring or facing challenges about their sexual orientation or gender identity.</li>
            <li><strong className="service-heading">Wellness Services</strong> - Evidence-based holistic therapies aimed at healing unhealthy divisions between the mind, body and spirit.</li>
          </ul>
          <p>Discover our full range of counselling services in Singapore and take the first step toward a healthier, more fulfilling life today.</p>
          <button className="read-more-button">Learn More</button>
        </div>
        {/* <div className="services-image-container">
          <img src="/service.jpg" alt="Our Services" className="services-image" />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
