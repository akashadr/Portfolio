import { useState, useEffect } from 'react';
import './App.css';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Skills       from './components/Skills';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Achievements from './components/Achievements';
import Profiles     from './components/Profiles';
import Education    from './components/Education';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored === 'dark' : true;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('light');
    } else {
      html.classList.add('light');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(d => !d)} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Profiles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
