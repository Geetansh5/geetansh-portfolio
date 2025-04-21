import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_a37ymvp',       // ✅ Service ID
      'template_igpgz2b',      // ✅ Template ID
      formData,
      'VtuvBblESso8EGzjx'      // ✅ Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Email sending error:', error);
      alert('Something went wrong. Please try again later.');
    });
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>If you have any questions or want to collaborate, feel free to reach out!</p>
          <ul>
            <li><i className="fas fa-envelope"></i> Email: geetanshmalhotra0507@gmail.com</li>
            <li><i className="fas fa-phone-alt"></i> Phone: +91 9818092778</li>
            <li><i className="fas fa-map-marker-alt"></i> Location: Delhi, India</li>
          </ul>
          <ul className="social-icons">
            <li><a href="mailto:geetanshmalhotra0507@gmail.com"><i className="fas fa-envelope"></i></a></li>
            <li><a href="https://github.com/Geetansh5" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/geetansh-malhotra-3b9885202/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
