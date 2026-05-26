import React from 'react';
import { Mail, MapPin } from 'lucide-react'; // 🚀 Only importing stable, generic standard utilities

function Contact() {
  const contactChannels = [
    {
      type: "Mail Coordinates",
      value: "omaewaali123@gmail.com", // Replace with your real email
      link: "mailto:omaewaali123@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      actionText: "Send an Email"
    },
    {
      type: "Professional Network",
      value: "www.linkedin.com/in/omaima-ali-6274bb373", // Replace with your LinkedIn URL
      link: "https://www.linkedin.com/in/omaima-ali-6274bb373",
      // 🚀 Bulletproof Inline SVG for LinkedIn
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      actionText: "Let's Connect"
    },
    {
      type: "Engineering Repos",
      value: "https://github.com/Omaima-Ali", // Replace with your GitHub URL
      link: "https://github.com/Omaima-Ali",
      // 🚀 Bulletproof Inline SVG for GitHub
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      actionText: "View Repositories"
    },
    {
      type: "Base Station Location",
      value: "Wah Cantt, Pakistan",
      link: null, 
      icon: <MapPin className="w-6 h-6" />,
      actionText: "Current Residence"
    }
  ];

  return (
    <section id="contact" className="w-full h-auto bg-[#1e2229] pt-12 pb-24 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center border-t border-slate-800/40">
      
      {/* SECTION HEADER */}
      <div className="w-full max-w-6xl flex flex-col items-center text-center mb-16">
        <span className="text-[#10b981] font-mono tracking-widest text-xs uppercase mb-3">
          Get In Touch
        </span>
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="h-[2px] bg-[#10b981] flex-grow max-w-[80px] md:max-w-[150px] rounded-full" />
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Contact Me
          </h2>
          <div className="h-[2px] bg-[#10b981] flex-grow max-w-[80px] md:max-w-[150px] rounded-full" />
        </div>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 leading-relaxed">
          Always looking to collaborate on intelligent automation, and modern web applications. feel free to reach out through any of these platforms!
        </p>
      </div>

      {/* CHANNELS GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {contactChannels.map((channel, index) => {
          const CardContent = () => (
            <>
              <div className="p-4 bg-[#1e2229] border border-slate-800 text-[#10b981] rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:border-[#10b981]/30 shadow-inner">
                {channel.icon}
              </div>

              <span className="text-slate-500 font-mono text-xs uppercase tracking-wider mb-1 block">
                {channel.type}
              </span>
              
              <h3 className="text-white text-sm font-semibold tracking-wide mb-4 text-center break-all px-2 transition-colors duration-300 group-hover:text-[#10b981]">
                {channel.value}
              </h3>

              <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors duration-300 mt-auto bg-slate-800/40 px-3 py-1 rounded-full border border-slate-700/30">
                {channel.actionText}
              </span>
            </>
          );

          return channel.link ? (
            <a 
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-between bg-[#1a1d24] border border-slate-800/80 rounded-2xl p-6 h-52 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#10b981]/30 hover:shadow-2xl hover:shadow-[#10b981]/5 cursor-pointer text-center"
            >
              <CardContent />
            </a>
          ) : (
            <div 
              key={index}
              className="group flex flex-col items-center justify-between bg-[#1a1d24] border border-slate-800/80 rounded-2xl p-6 h-52 text-center"
            >
              <CardContent />
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className="w-full max-w-6xl text-center pt-16 mt-16 border-t border-slate-800/60">
        <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">
          © 2026 Omaima Ali • Computer Engineering Technology Student
        </span>
      </div>

    </section>
  );
}

export default Contact;