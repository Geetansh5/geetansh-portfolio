import React from 'react';
import './Honors.css';

const HonorsAndAwards = () => (
  <section id="honors-and-awards" className="honors-and-awards" data-aos="fade-up">
    <h2 className="section-title">Honors & Awards</h2>
    <div className="honors-container">
      <div className="honor-card">
        <i className="award-icon fas fa-trophy"></i>
        <h3>2nd Position in State Level Science, Mathematics, and Environment Exhibition</h3>
        <p>Government of Delhi, June 2024</p>
        <p>Qualified to exhibit my project at the National Level.</p>
      </div>

      <div className="honor-card">
        <i className="award-icon fas fa-medal"></i>
        <h3>2nd State Rank in 14th National Cyber Olympiad</h3>
        <p>Science Olympiad Foundation, June 2021</p>
        <p>Awarded by school for academic excellence.</p>
      </div>
    </div>
  </section>
);

export default HonorsAndAwards;
