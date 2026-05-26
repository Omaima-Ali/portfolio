import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#1e2229] selection:bg-[#10b981] selection:text-[#1e2229]">
    
      <header className="absolute top-0 left-0 w-full z-50 px-8 md:px-16 lg:px-24 py-8 flex justify-between items-center pointer-events-none">
        
      </header>

      {/* Landing Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    
    </div>
  );
}

export default App;