import React from 'react';

function About() {
  return (
    <section id="about" className="w-full h-auto bg-[#1e2229] pt-12 pb-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex items-center">
      <div className="max-w-5xl mx-auto w-full flex flex-col justify-center">
        
        {/* Section Header with Horizontal Line */}
        <div className="flex items-center gap-6 mb-8 w-full">
          <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight whitespace-nowrap">
            About Me
          </h2>
          {/* Clean minimalist design line that scales smoothly across wide displays */}
          <div className="h-[2px] bg-[#10b981] flex-grow rounded-full max-w-xl md:max-w-2xl" />
        </div>

        {/* Biography Text Container */}
        <div className="w-full">
          <p className="text-white text-base sm:text-lg leading-relaxed mb-10 max-w-4xl text-justify md:text-left">
            Aspiring Software Engineer with a background in Computer Engineering Technology, interested in building efficient and scalable applications. Experienced in developing web-based projects and exploring AI concepts. Eager to apply my skills, solve real-world problems, and grow in a professional engineering environment
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full">
          {/* Solid Interactive Button */}
         <button 
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#10b981] text-[#1e2229] font-bold tracking-wider text-xs sm:text-sm px-8 py-4 uppercase border-2 border-[#10b981] hover:bg-transparent hover:text-white transition-colors duration-300 shadow-lg shadow-[#10b981]/10 cursor-pointer"
          >
            Hire Me
          </button>
          {/* Outlined Custom Button */}
          <a 
              href="/CV.pdf" 
              download="Omaima_Ali_CV.pdf"
              className="inline-block text-center bg-transparent text-white font-bold tracking-wider text-xs sm:text-sm px-8 py-4 uppercase border-2 border-slate-600 hover:border-[#10b981] hover:text-[#10b981] transition-colors duration-300 cursor-pointer"
            >
              Download CV
            </a>
        </div>

      </div>
    </section>
  );
}

export default About;