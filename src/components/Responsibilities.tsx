import React from 'react';
import './Responsibilities.css';

const Responsibilities = () => (
  <section id="responsibilities" className="responsibilities" data-aos="fade-up">
    <h2 className="section-title">Responsibilities</h2>
    <div className="responsibilities-list">
      <div className="responsibility-item">
        <i className="responsibility-icon fas fa-users"></i>
        <h3>Public Relations Head</h3>
        <p>Dramatics Society, USS</p>
        <p>Managed internal and external communication, promoting events and coordinating with stakeholders to ensure smooth operations.</p>
      </div>

      <div className="responsibility-item">
        <i className="responsibility-icon fas fa-flag"></i>
        <h3>House Captain</h3>
        <p>Sri Venkateshwar International School</p>
        <p>Led the school house, organizing events and representing the house during inter-house competitions, fostering team spirit and leadership among peers.</p>
      </div>

      <div className="responsibility-item">
        <i className="responsibility-icon fas fa-theater-masks"></i>
        <h3>General Secretary</h3>
        <p>Aveksha, Dramatics Society, USS</p>
        <p>Oversaw the operations and management of the Dramatics Society, organized theater performances, and coordinated with the team to ensure seamless execution of events and activities.</p>
      </div>
    </div>
  </section>
);

export default Responsibilities;

