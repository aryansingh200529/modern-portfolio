import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; // <-- Skills import kiya gaya hai
import Services from './components/Services'; 
import Experience from './components/Experience';
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
        <Services /> 
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;