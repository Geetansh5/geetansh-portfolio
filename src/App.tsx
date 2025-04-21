import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Honors from './components/HonorsAndAwards';
import Responsibilities from './components/Responsibilities';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation
      once: true, // whether animation should happen once or repeat
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Honors />
      <Responsibilities />
      <Contact />
    </>
  );
}

export default App;
