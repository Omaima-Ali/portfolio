import React from 'react';
import skillsImg from '../assets/Skillsimg.png';
function Skills() {
  const techSkills = [
    { name: "React.js", color: "#61DAFB" },
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "Flask", color: "#E95420" },
    { name: "OpenCV", color: "#E95420" },
    { name: "PyTorch", color: "#47A248" },
    { name: "Transformers", color: "#61DAFB" },
    { name: "CSS3", color: "#1572B6" },
    { name: "HTML5", color: "#E34F26" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "MySQL", color: "#4479A1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Linux (Ubuntu)", color: "#E95420" },
    { name: "Linux (Rocky)", color: "#11B881" }
  ];

  return (
    <section id="skills" className="w-full h-auto bg-[#1e2229] pt-12 pb-24 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
      
      {/* 🛠️ FIXED STRUCTURE: Added a strict min-height to prevent shifting while loading */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center min-h-[160px] justify-center mb-12">

        {/* Aspect-ratio locked image token container */}
        <div className="w-82 h-82 rounded-full border-2 border-[#10b981] overflow-hidden bg-[#1a1d24] shadow-md shadow-[#10b981]/10 mb-4 shrink-0">
          <img 
            src={skillsImg} 
            alt="Skills" 
            width="48"
            height="48"
            className="w-full h-full object-cover" 
            loading="eager" 
          />
        </div>

               
        {/* Content-stretching row line layout with matching padding to avoid container recalculation */}
        <div className="flex items-center justify-center gap-4 w-full h-10">
          <div className="h-[2px] bg-[#10b981] flex-grow max-w-[60px] sm:max-w-[120px] md:max-w-[180px] rounded-full" />
          
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase whitespace-nowrap">
            Technical Skills
          </h2>
          
          <div className="h-[2px] bg-[#10b981] flex-grow max-w-[60px] sm:max-w-[120px] md:max-w-[180px] rounded-full" />
        </div>
      </div>

      {/* DYNAMIC SKILLS CARD GRID */}
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 justify-center">
        {techSkills.map((tech, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col items-center justify-center bg-[#1a1d24] border border-slate-800/80 h-36 sm:h-40 rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#10b981]/40 hover:shadow-2xl hover:shadow-[#10b981]/5 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/0 to-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-14 h-14 rounded-xl bg-[#1e2229] border border-slate-800 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-slate-700 group-hover:scale-110 shadow-inner">
              <span 
                className="font-mono font-black text-lg select-none"
                style={{ color: tech.color }}
              >
                {tech.name.substring(0, 2).toUpperCase()}
              </span>
            </div>

            <span className="text-slate-400 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors duration-300 group-hover:text-white text-center z-10">
              {tech.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;