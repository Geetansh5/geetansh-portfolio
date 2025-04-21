import React from 'react';
import './Skills.css';

const Skills = () => (
  <section id="skills" className="skills" data-aos="fade-up">
    <h2 className="section-title">My Skills</h2>
    <div className="skills-container">
      <div className="skill-card">
        <h3>Programming Languages</h3>
        <ul className="skills-list">
          <li>Python</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C</li>
        </ul>
      </div>

      <div className="skill-card">
        <h3>Libraries</h3>
        <ul className="skills-list">
          <li>NumPy</li>
          <li>Pandas</li>
          <li>Scikit-learn</li>
          <li>TensorFlow</li>
          <li>Keras</li>
          <li>Seaborn</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </div>

      <div className="skill-card">
        <h3>Database Systems</h3>
        <ul className="skills-list">
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>Postgres</li>
        </ul>
      </div>

      <div className="skill-card">
        <h3>Data Science & Machine Learning</h3>
        <ul className="skills-list">
          <li>Supervised Learning</li>
          <li>Unsupervised Learning</li>
        </ul>
      </div>

      <div className="skill-card">
        <h3>Other Technologies</h3>
        <ul className="skills-list">
          <li>Git</li>
          <li>Agile Methodology</li>
          <li>API Development</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;



