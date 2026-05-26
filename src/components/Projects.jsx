import React from 'react';

// Import your project showcase images from your assets folder
import DIP1 from '../assets/DIPpic1.png';
import expenseTrackerImg from '../assets/expense_tracker.png';
import linuxImg from '../assets/sna.jpg';

function Projects() {
  const projectsData = [

    {
      title: "Full-Stack Expense Tracker Hub",
      description: "A robust financial management application featuring automated balance parsing, advanced procedural MySQL ledger automation, and transactional guardrails.",
      tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Database Automation"],
      image: expenseTrackerImg,
      githubLink: "https://github.com/Omaima-Ali/website-Expense_tracker"
    },
    {
      title: "Real-Time Privacy Masking System",
      description: "An interactive computer vision pipeline utilizing classical cascading classifiers and custom Gaussian masking to perform selective, real-time face anonymization.",
      tags: ["Python", "OpenCV", "Tkinter", "Computer Vision", "Machine Learning"],
      image: DIP1,
    },
    {
      title: "Secure Enterprise Mail Infrastructure",
      description: "An isolated, hardened Rocky Linux mail network utilizing Postfix (MTA) and Dovecot (MDA) over secure SMTPS/IMAPS transport layers.",
      tags: ["Rocky Linux", "Postfix", "Dovecot", "TLS Encryption", "Network Hardening"],
      image: linuxImg
     
    }
    
  ];

  return (
    <section id="projects" className="w-full h-auto bg-[#1e2229] pt-12 pb-24 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
      
      {/* SECTION HEADER */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center mb-16">
        <span className="text-[#10b981] font-mono tracking-widest text-xs uppercase mb-3">
          Recent Creations
        </span>
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="h-[2px] bg-[#10b981] flex-grow max-w-[80px] md:max-w-[150px] rounded-full" />
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Recent Projects
          </h2>
          <div className="h-[2px] bg-[#10b981] flex-grow max-w-[80px] md:max-w-[150px] rounded-full" />
        </div>
      </div>

      {/* VISUAL PROJECTS GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
        {projectsData.map((project, index) => (
          <div 
            key={index}
            className="group flex flex-col bg-[#1a1d24] border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#10b981]/30 hover:shadow-2xl hover:shadow-[#10b981]/5"
          >
            
            {/* PROJECT CARD IMAGE HEADER */}
            <div className="relative w-full h-48 sm:h-52 bg-[#1e2229] overflow-hidden border-b border-slate-800/60">
              <img 
                src={project.image} 
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d24] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
            </div>

            {/* CARD CONTENT LAYER */}
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
              
              <div className="w-full">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-white text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#10b981]">
                    {project.title}
                  </h3>
                  
                  {/* Action Link Anchor Tag */}
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#1e2229] border border-slate-800 text-slate-400 hover:text-[#10b981] hover:border-[#10b981]/30 rounded-xl transition-all duration-300 shrink-0"
                    title="View Case Study & Video Demo on GitHub"
                  >
                    {/* 🚀 Pure Inline SVG Code — zero dependency on lucide imports */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Dynamic Technology Badges Footer Row */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60 mt-auto">
                {project.tags.map((tag, tagIdx) => (
                  <span 
                    key={tagIdx} 
                    className="text-[#10b981] bg-[#10b981]/5 font-mono text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md border border-[#10b981]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;