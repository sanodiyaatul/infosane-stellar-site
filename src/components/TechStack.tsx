// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import {
//   Database, Code2, Server, Cloud, Smartphone, Cpu,
//   Layers, Zap, Terminal, GitBranch, Shield, BrainCircuit, BugPlay
// } from "lucide-react";
// import video from "@/assets/infinit.mp4";

// const COLORS = {
//   NAVY_DARK: "#103463",
//   NAVY_TRANSPARENT: "rgba(51, 92, 146, 0.3)",
//   BLUE_PRIMARY: "#23A2D9",
//   WHITE: "#FFFFFF",
// };

// const technologies = [
//   // --- CORE BACKEND (Your Focus) ---
//   { name: "Java / Spring Boot", icon: Cpu, category: "Enterprise Backend" },
//   { name: "Node.js / Express", icon: Zap, category: "Fullstack APIs" },
//   { name: "Python / Django", icon: Terminal, category: "Web & AI/ML" },
//   { name: "PHP / Laravel", icon: Server, category: "Dynamic Web" },
  
//   // --- FRONTEND & MOBILE (Your Focus) ---
//   { name: "React / Next.js", icon: Layers, category: "Modern Frontend" },
//   { name: "React Native", icon: Smartphone, category: "Cross-Platform Mobile" },
//   { name: "TypeScript", icon: GitBranch, category: "Type Safety" },
  
//   // --- DATA & CLOUD (Your Focus) ---
//   { name: "MySQL / Postgre", icon: Database, category: "Relational Data" },
//   { name: "AWS", icon: Cloud, category: "Cloud Infrastructure" },
//   { name: "Docker / Kubernetes", icon: Shield, category: "DevOps & Scaling" }, 
  
//   // --- SPECIALTY & TOOLS ---
//   { name: "AI / Machine Learning", icon: BrainCircuit, category: "Intelligence" },
//   { name: "Quality Assurance (QA)", icon: BugPlay, category: "Testing" },
// ];

// const TechStack = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.3, // Adjust based on when to trigger
//     triggerOnce: false,
//   });

//   return (
//     <>
//       {/* Conditionally render video and filter only if TechStack is in viewport */}
//       {inView && (
//         <>
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="fixed top-0 left-0 w-full h-screen object-cover z-0"
//             style={{ pointerEvents: "none" }}
//           >
//             <source src={video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <div
//             className="fixed top-0 left-0 w-full h-screen z-10"
//             style={{
//               background:
//                 "linear-gradient(to right, #103463 0%, rgba(16, 52, 99, 0.8) 40%, rgba(16, 52, 99, 0.5) 80%, rgba(16, 52, 99, 0.2) 100%)",
//               pointerEvents: "none",
//             }}
//           />
//         </>
//       )}

//       {/* TechStack section content with observer ref attached */}
//       <section
//         id="techstack"
//         ref={ref}
//         className="relative z-20 py-24 min-h-screen"
//         style={{ minHeight: "100vh" }}
//       >
//         <div className="container mx-auto px-4 lg:px-8 text-white">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
//               Our Core Technology Stack
//             </h2>
//             <p className="text-lg max-w-2xl mx-auto text-gray-300">
//               Specializing in reliable, open-source technology. Our core expertise includes <span className="font-semibold">Java/Spring Boot</span>, <span className="font-semibold">React Native</span>, and secure <span className="font-semibold">MySQL</span>-based backends.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//             {technologies.map((tech, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white/20 transition-smooth group border border-white/20"
//               >
//                 <div
//                   className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth"
//                   style={{ backgroundColor: COLORS.NAVY_TRANSPARENT }}
//                 >
//                   <tech.icon
//                     className="w-8 h-8 text-white group-hover:text-primary"
//                     style={{ color: COLORS.BLUE_PRIMARY }}
//                   />
//                 </div>
//                 <p className="text-sm font-semibold text-white text-center">{tech.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TechStack;



// ------------perfect-----------------
// import React from "react";
// import { useInView } from "react-intersection-observer";
// import video from "@/assets/infinit.mp4";

// const TechStack = () => {
//   const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

//   return (
//     <>
//       {/* Fixed video background visible only when in view */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="fixed top-0 left-0 w-full h-screen object-cover z-0 transition-opacity duration-700 ease-in-out"
//         style={{ pointerEvents: "none", opacity: inView ? 1 : 0, visibility: inView ? "visible" : "hidden" }}
//       >
//         <source src={video} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* TechStack content */}
//       <section id="techstack" ref={ref} className="relative z-20 py-24 min-h-screen">
//         <div className="container mx-auto px-4 lg:px-8 text-white">
//           {/* Your TechStack content here */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default TechStack;












import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Database, Code2, Server, Cloud, Smartphone, Cpu,
  Layers, Zap, Terminal, GitBranch, Shield, BrainCircuit, BugPlay
} from "lucide-react";
import video from "@/assets/infinit.mp4";

const COLORS = {
  NAVY_DARK: "#103463",
  NAVY_TRANSPARENT: "rgba(51, 92, 146, 0.3)",
  BLUE_PRIMARY: "#23A2D9",
  WHITE: "#FFFFFF",
};

const technologies = [
  // --- CORE BACKEND (Your Focus) ---
  { name: "Java / Spring Boot", icon: Cpu, category: "Enterprise Backend" },
  { name: "Node.js / Express", icon: Zap, category: "Fullstack APIs" },
  { name: "Python / Django", icon: Terminal, category: "Web & AI/ML" },
  { name: "PHP / Laravel", icon: Server, category: "Dynamic Web" },
  
  // --- FRONTEND & MOBILE (Your Focus) ---
  { name: "React / Next.js", icon: Layers, category: "Modern Frontend" },
  { name: "React Native", icon: Smartphone, category: "Cross-Platform Mobile" },
  { name: "TypeScript", icon: GitBranch, category: "Type Safety" },
  
  // --- DATA & CLOUD (Your Focus) ---
  { name: "MySQL / Postgre", icon: Database, category: "Relational Data" },
  { name: "AWS", icon: Cloud, category: "Cloud Infrastructure" },
  { name: "Docker / Kubernetes", icon: Shield, category: "DevOps & Scaling" }, 
  
  // --- SPECIALTY & TOOLS ---
  { name: "AI / Machine Learning", icon: BrainCircuit, category: "Intelligence" },
  { name: "Quality Assurance (QA)", icon: BugPlay, category: "Testing" },
];

const TechStack = () => {
  const { ref, entry } = useInView({
    threshold: [0, 0.01, 0.25, 0.5, 0.75, 1],
  });

  // Calculate opacity proportional to intersection ratio
  const intersectionRatio = entry?.intersectionRatio ?? 0;

  return (
    <>
      {/* Fixed video background with smooth opacity */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-screen object-cover z-0"
        style={{
          pointerEvents: "none",
          opacity: intersectionRatio,
          transition: "opacity 300ms ease-out",
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Bluish filter with same opacity */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-10"
        style={{
          background:
            "linear-gradient(to right, #103463 0%, rgba(16, 52, 99, 0.7) 40%, rgba(16, 52, 99, 0.45) 80%, rgba(16, 52, 99, 0.2) 100%)",
          pointerEvents: "none",
          opacity: intersectionRatio * 0.75, // scale filter opacity with video opacity
          transition: "opacity 300ms ease-out",
        }}
      />

      {/* TechStack content */}
      {/* <section
        id="techstack"
        ref={ref}
        className="relative z-20 py-24 min-h-screen"
        style={{ minHeight: "100vh" }}
      >
      </section> */}
       <section
        id="techstack"
        ref={ref}
        className="relative z-20 py-24 min-h-screen"
        style={{ minHeight: "100vh" }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Our Core Technology Stack
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-300">
              Specializing in reliable, open-source technology. Our core expertise includes <span className="font-semibold">Java/Spring Boot</span>, <span className="font-semibold">React Native</span>, and secure <span className="font-semibold">MySQL</span>-based backends.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:bg-white/20 transition-smooth group border border-white/20"
              >
                <div
                  className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth"
                  style={{ backgroundColor: COLORS.NAVY_TRANSPARENT }}
                >
                  <tech.icon
                    className="w-8 h-8 text-white group-hover:text-primary"
                    style={{ color: COLORS.BLUE_PRIMARY }}
                  />
                </div>
                <p className="text-sm font-semibold text-white text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;