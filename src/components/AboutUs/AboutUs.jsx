import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-section">
      <div className="aboutus-content">
        <div className="aboutus-text-container">
          
          <h2>Meet the Counseling <br />Perspective Team</h2>
          <p>We take pride in our dedicated team of highly qualified and compassionate counsellors. Each team member is an experienced professional, specializing in a diverse range of therapeutic approaches to be able to meet your unique needs and preferences. They bring a wealth of knowledge, empathy, and a steadfast commitment to supporting you in achieving your mental health goals.</p>
          <p>From cognitive-behavioral therapy and existential psychotherapy to hypnotherapy and play therapy, our counsellors possess the expertise to guide you through various life transitions, relationship challenges, grief and loss, and other personal growth journeys. Take a moment to get to know the faces behind our practice — learn more about their backgrounds, specialties, and the unique perspectives they bring to our team.</p>
          <button className="read-more-button">Meet the Team</button>
        </div>
        <div className="aboutus-image-container">
          <img src="/Main.png" alt="Welcome" className="aboutus-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
