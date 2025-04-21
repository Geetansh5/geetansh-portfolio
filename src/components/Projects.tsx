import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects" data-aos="fade-up">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-container">
      <div className="project-card">
        <h3>F1 FanHub</h3>
        <p>A community platform for Formula 1 fans to get real-time news, standings, and race schedules.</p>
        <ul className="project-technologies">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>REST APIs</li>
        </ul>
        <a href="https://lnkd.in/g2bcXxvd" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      <div className="project-card">
        <h3>Co-Help App</h3>
        <p>A real-time COVID-19 tracking app that provides updates on cases in India.</p>
        <ul className="project-technologies">
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
        <a href="https://github.com/Geetansh5/Co-Help-App" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>

      {/* Add more projects as needed */}
    </div>
  </section>
);

export default Projects;
