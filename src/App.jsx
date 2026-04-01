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
  return (
    <>
      <Navbar />
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
