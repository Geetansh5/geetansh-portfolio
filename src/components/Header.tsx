import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header
    className="hero"
    data-aos="fade-up"
    style={{
      backgroundImage: "url('/IMG_8009.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="hero-content">
      <h1 data-aos="zoom-in">Geetansh Malhotra</h1>
      <p data-aos="fade-in" data-aos-delay="200">
        Aspiring Front-End Developer | Junior Programmer
      </p>
      <a href="#projects" className="cta-button" data-aos="fade-up" data-aos-delay="400">
        View My Projects
      </a>
    </div>
  </header>
);

export default Header;
