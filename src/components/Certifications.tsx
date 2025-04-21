import React from 'react';
import './Certifications.css';

const Certifications = () => (
  <section id="certifications" className="certifications" data-aos="fade-up">
    <h2 className="section-title">Certifications</h2>
    <div className="certifications-container">
      <div className="certification-card">
        <h3>Machine Learning Specialization</h3>
        <p>Stanford University (Coursera)</p>
        <p className="certification-date">Completed: March 2024</p>
        <a
          href="https://www.coursera.org/account/accomplishments/verify/XSHBRE6RGMXY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
          className="certification-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certification
        </a>
      </div>

      <div className="certification-card">
        <h3>Agile Project Management</h3>
        <p>HPLife</p>
        <p className="certification-date">Completed: December 2024</p>
        <a
          href="https://www.life-global.org/certificate/a011fd41-99f6-4cf3-b8a0-a367c8940267"
          className="certification-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certification
        </a>
      </div>

      <div className="certification-card">
        <h3>Artificial Intelligence and its Market Prospects</h3>
        <p>IBM Innovation Centre for Education</p>
        <p className="certification-date">Completed: June 2024</p>
        <a
          href="https://www.ibm.com/certify/certification-details"
          className="certification-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certification
        </a>
      </div>
    </div>
  </section>
);

export default Certifications;
