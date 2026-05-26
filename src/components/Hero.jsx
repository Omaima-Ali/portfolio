import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/Profile.jpeg'; 

function Hero() {
  return (
   <section className="relative w-full h-auto min-h-0 md:min-h-screen bg-[#1e2229] flex flex-col md:flex-row items-stretch overflow-hidden pb-16 md:pb-0">
    
      
      {/* This is the main structural container. 
        - On mobile: It is a 2-column grid (`grid grid-cols-12`).
        - On laptop (`md:`): It switches back to normal block positioning so the layout works side-by-side.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 pt-28 md:pt-0 grid grid-cols-12 md:flex md:items-center justify-between gap-4 z-10">
        
        {/* Left Text Box: Takes up 7 out of 12 columns on mobile */}
        <div className="col-span-7 md:w-1/2 flex flex-col justify-center">
          <span className="text-[#10b981] font-medium tracking-wide text-sm sm:text-base md:text-xl block mb-2">
            Hello Everyone.
          </span>
          
          <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight uppercase">
            I'M OMAIMA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Ali
            </span>
          </h1>

          {/* Action Button - Scaled down for mobile text layout compatibility */}
          <div className="flex items-center w-fit border border-[#10b981] md:border-2 bg-[#1e2229] group hover:bg-[#10b981] transition-all duration-300 ease-in-out cursor-pointer">
           <button 
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[#1e2229] font-bold tracking-wider text-xs sm:text-sm px-8 py-4 uppercase border-2 border-[#10b981] hover:bg-transparent hover:text-white transition-colors duration-300 shadow-lg shadow-[#10b981]/10 cursor-pointer"
          >
            <span className="text-white font-semibold tracking-wider text-[10px] sm:text-xs md:text-sm px-3 md:px-6 py-3 md:py-4 uppercase group-hover:text-[#1e2229] transition-colors duration-300">
              
              Computer Engineering Student
            </span>
            </button>
            <div className="bg-[#10b981] p-3 md:p-4 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#1e2229] group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Right Content Box: Takes up 5 out of 12 columns on mobile */}
        {/* On mobile, we remove the background split completely. On md (laptops), we turn on the split! */}
        <div className="col-span-5 md:w-1/2 flex flex-col items-center justify-center md:justify-center pt-4 md:pt-0 z-10">
          
          {/* Circular Image Wrapper */}
     <div className="relative flex items-center justify-center py-12 sm:py-24 w-full min-h-[400px] sm:min-h-[550px]">
  
  {/* 1. RESPONSIVE OUTER OKLCH RING (Mobile par size scale down kar diya) */}
  <div 
    style={{ backgroundColor: 'oklch(37.8% 0.077 168.94)' }}
    className="absolute w-64 h-64 sm:w-[420px] sm:h-[420px] rounded-full opacity-80 shadow-[0_0_40px_rgba(0,0,0,0.5)] z-0"
  >
    <div className="absolute inset-1.5 rounded-full border border-dashed border-[#10b981]/15 animate-[spin_180s_linear_infinite]"></div>
  </div>

  {/* 2. RESPONSIVE INNER HOLE (Mobile: w-44, Desktop: w-[280px]) */}
  <div className="absolute w-44 h-44 sm:w-[280px] sm:h-[280px] rounded-full bg-[#1e2229] border-4 sm:border-[6px] border-[#1a1d24] shadow-2xl z-10 overflow-hidden">
    
    {/* 3. YOUR FULL IMAGE */}
    <img 
      src={profileImg} // Apni image ka path yahan dein
      alt="Omaima Ali Profile"
      className="w-full h-full object-cover object-center scale-[1.05]"
    />
  </div>

  {/* 4. RESPONSIVE FLOATING BADGES (Mobile par distance aur size dono optimize kar diye) */}
  
  {/* REACT */}
  <div className="absolute z-20 transform -translate-x-[65px] -translate-y-[110px] sm:-translate-x-[110px] sm:-translate-y-[200px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a1d24] border border-slate-700 sm:border-2 flex flex-col items-center justify-center shadow-xl">
    <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 tracking-tighter uppercase">React</span>
  </div>

  {/* PYTHON */}
  <div className="absolute z-20 transform translate-x-[65px] -translate-y-[110px] sm:translate-x-[110px] sm:translate-y-[200px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a1d24] border border-slate-700 sm:border-2 flex flex-col items-center justify-center shadow-xl">
    <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 tracking-tighter uppercase">Python</span>
  </div>

  {/* SQL */}
  <div className="absolute z-20 transform -translate-x-[120px] -translate-y-[5px] sm:-translate-x-[210px] sm:-translate-y-[10px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a1d24] border border-slate-700 sm:border-2 flex flex-col items-center justify-center shadow-xl">
    <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 tracking-tighter uppercase">SQL</span>
  </div>

  {/* AI */}
  <div className="absolute z-20 transform translate-x-[120px] -translate-y-[5px] sm:translate-x-[210px] sm:translate-y-[10px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a1d24] border border-slate-700 sm:border-2 flex flex-col items-center justify-center shadow-xl">
    <span className="text-[9px] sm:text-[11px] font-extrabold text-[#10b981] tracking-tight uppercase">AI</span>
  </div>

  {/* LLM */}
  <div className="absolute z-20 transform translate-y-[120px] sm:translate-y-[200px] w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a1d24] border border-slate-700 sm:border-2 flex flex-col items-center justify-center shadow-xl">
    <span className="text-[9px] sm:text-[11px] font-extrabold text-[#10b981] tracking-tight uppercase">LLM</span>
  </div>

</div>
          {/* Contact details shifted safely directly under avatar on tiny viewports */}
          <div className="mt-4 md:absolute md:top-8 md:right-8 flex items-center gap-2 md:gap-4 text-slate-400 md:text-[#1e2229] font-medium z-20">
            <span className="hover:underline cursor-pointer text-xs md:text-sm">Contact Me</span>
            <a href="#contact" className="p-1.5 md:p-2 border border-slate-500 md:border-[#1e2229] rounded-full hover:bg-[#10b981] hover:text-[#1e2229] transition-colors">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>

        </div>

      </div>

      {/* The Split Background Panel:
        This panel is hidden on mobile (`hidden`) and only turns visible on desktop (`md:block`).
        This completely eliminates the block color stretching downwards underneath your text on mobile!
      */}
      <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-[#10b981] z-0" />

      {/* Decorative Grid Dots - Hidden on mobile for clean breathing room */}
      <div className="absolute bottom-6 left-6 grid grid-cols-5 gap-2 opacity-10 hidden md:grid">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div>
        ))}
      </div>

    </section>
  );
}

export default Hero;