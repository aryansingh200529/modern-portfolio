import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; 
import Coursework from './components/coursework';
import Services from './components/Services'; 
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills /> {/* <-- Yahan Skills section add kiya hai */}
        <Coursework />
        <Services /> 
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
