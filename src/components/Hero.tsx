import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const COLORS = {
  NAVY_DARK: "#103463",
  NAVY_TRANSPARENT: "rgba(51, 92, 146, 0.3)",
  BLUE_PRIMARY: "#23A2D9",
  WHITE: "#FFFFFF",
};

const Hero = () => {
  const BACKGROUND_IMAGES = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwd29ya2luZyUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDBMHxzZWFyY2h8MTR8fHBlb3BsZSUyMHdvcmtpbmclMjBpbiUyMG9mZmljZXxlbnwwfDB8fHww',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDBMHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (BACKGROUND_IMAGES.length < 2) return;
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % BACKGROUND_IMAGES.length
      );
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const customKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  const desktopContentClipPath = 'polygon(0% 0%, 100% 0%, 10% 100%, 0% 100%)';
  const desktopImageFilterClipPath = 'polygon(10% 100%, 100% 100%, 100% 0%)';
  const mobileFullClipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
  const mobileGradient = `linear-gradient(to right, ${COLORS.NAVY_DARK} 0%, rgba(16, 52, 99, 0.8) 40%, rgba(16, 52, 99, 0.5) 80%, rgba(16, 52, 99, 0.2) 100%)`;

  return (
    <>
      {/* Fixed Background for the Hero Section */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{ minHeight: "100vh" }}
      >
        {BACKGROUND_IMAGES.map((imageUrl, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${imageUrl}")`,
              transition: "opacity 2000ms ease-in-out",
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Hero Section - content scrolls, bg does NOT */}
      <section
        id="hero"
        className="relative flex items-center justify-start overflow-hidden z-20"
        style={{ minHeight: "100vh " }}
      >
        {/* Overlays */}
        <div
          id="hero-content-overlay"
          className="absolute inset-0 z-10"
          style={{
            background: mobileGradient,
            clipPath: mobileFullClipPath,
          }}
        />
        <div
          id="hero-image-filter-overlay"
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: COLORS.NAVY_TRANSPARENT,
            opacity: 0,
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-20 py-24 md:py-0 ">
          <div className="max-w-3xl text-left text-white ml:0 lg:ml-12 lg:pt-[5%]">
            <h1
              className="text-3xl sm:text-2xl lg:text-4xl font-extrabold mb-6 leading-tight opacity-0 translate-y-5"
              style={{
                animationFillMode: "forwards",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <span className="text-white block">Innovation. Precision. Impact.</span>
              <span className="block" style={{ color: COLORS.BLUE_PRIMARY }}>
                Engineering the Future of Technology
              </span>
            </h1>

            <p
              className="text-base md:text-sm text-white/80 mb-10 max-w-lg leading-relaxed opacity-0 translate-y-5"
              style={{
                animationFillMode: "forwards",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              Infosane Technology LLP transforms ideas into intelligent digital solutions.
              We combine innovation, technical excellence, and strategic insight to empower
              businesses with scalable, future-ready technologies that drive real-world impact.
            </p>

            {/* <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight opacity-0 translate-y-5"
              style={{
                animationFillMode: "forwards",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <span className="text-white block">Innovation Redefined</span>
              <span className="block" style={{ color: COLORS.BLUE_PRIMARY }}>
                Delivering Tomorrow's Solutions Today
              </span>
            </h1>
            <p
              className="text-base md:text-lg text-white/80 mb-10 max-w-lg leading-relaxed opacity-0 translate-y-5"
              style={{
                animationFillMode: "forwards",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              At Infosane Technology LLP, we are committed to excellence in everything we do.
              From our rigorous quality standards to our dedication to continuous improvement,
              we strive to exceed our clients' expectations and deliver exceptional value.
            </p> */}

            <div
              className="flex flex-col sm:flex-row gap-4 justify-start opacity-0 translate-y-5"
              style={{
                animationFillMode: "forwards",
                animationDelay: "0.8s",
                animationName: "fadeInUp",
              }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                style={{
                  backgroundColor: COLORS.BLUE_PRIMARY,
                  color: "white",
                }}
                className="font-semibold text-base py-3 px-6 hover:opacity-90 transition-opacity rounded-md group lg:w-[35%]"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projects")}
                style={{
                  borderColor: COLORS.BLUE_PRIMARY,
                  color: COLORS.BLUE_PRIMARY,
                  backgroundColor: COLORS.WHITE,
                }}
                className="font-semibold text-base py-3 px-6 border-2 hover:bg-primary/10 transition-colors rounded-md lg:w-[35%]"
              >
                Explore Our Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-6 left-6 z-20 opacity-0"
          style={{
            animationFillMode: "forwards",
            animationDelay: "1s",
            animationName: "fadeIn",
          }}
        >
          <button
            onClick={() => scrollToSection("next-section")}
            className="p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} className="text-white/70 animate-bounce" />
          </button>
        </div>

        {/* CSS Overrides */}
        <style>{`
          @media (min-width: 1024px) {
            #hero-content-overlay { 
              background: ${COLORS.NAVY_DARK} !important; 
              clip-path: ${desktopContentClipPath} !important; 
            }
            #hero-image-filter-overlay {
              background-color: ${COLORS.NAVY_TRANSPARENT} !important;
              clip-path: ${desktopImageFilterClipPath} !important;
              opacity: 1 !important;
              pointer-events: auto !important;
            }
          }
          ${customKeyframes}
        `}</style>
      </section>

      {/* Next Section: Covers the background */}
      {/* <section
        id="next-section"
        className="relative z-30 bg-white min-h-screen flex items-center justify-center"
      >
        <div className="text-2xl text-gray-700 font-bold">
          Next Section Content Appears Here
        </div>
      </section> */}
    </>
  );
};

export default Hero;


// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, ChevronDown } from "lucide-react";

// const COLORS = {
//   NAVY_DARK: "#103463",
//   NAVY_TRANSPARENT: "rgba(51, 92, 146, 0.3)",
//   BLUE_PRIMARY: "#23A2D9",
//   WHITE: "#FFFFFF",
// };

// const Hero = () => {
//   const BACKGROUND_IMAGES = [
//     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (BACKGROUND_IMAGES.length < 2) return;
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
//     }, 4000);
//     return () => clearInterval(intervalId);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   const customKeyframes = `
//     @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
//     @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//   `;

//   const desktopContentClipPath = "polygon(0% 0%, 100% 0%, 10% 100%, 0% 100%)";
//   const desktopImageFilterClipPath = "polygon(10% 100%, 100% 100%, 100% 0%)";
//   const mobileFullClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
//   const mobileGradient = `linear-gradient(to right, ${COLORS.NAVY_DARK} 0%, rgba(16, 52, 99, 0.8) 40%, rgba(16, 52, 99, 0.5) 80%, rgba(16, 52, 99, 0.2) 100%)`;

//   return (
//     <>
//       {/* Hero Section Background */}
//       <section
//         id="hero"
//         className="relative flex items-center justify-start overflow-hidden z-10"
//         style={{ minHeight: "calc(100vh - 80px)" }}
//       >
//         {/* Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${BACKGROUND_IMAGES[currentImageIndex]})`,
//             transition: "background-image 1s ease-in-out",
//           }}
//         />

//         {/* Overlay */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background: mobileGradient,
//             clipPath: mobileFullClipPath,
//           }}
//         />

//         {/* Content */}
//         <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 md:py-0">
//           <div className="max-w-3xl text-left text-white lg:pt-[5%]">
//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight opacity-0 translate-y-5"
//               style={{
//                 animation: "fadeInUp 1s ease forwards",
//                 animationDelay: "0.4s",
//               }}
//             >
//               <span className="text-white block">Innovation Redefined</span>
//               <span className="block" style={{ color: COLORS.BLUE_PRIMARY }}>
//                 Delivering Tomorrow's Solutions Today
//               </span>
//             </h1>

//             <p
//               className="text-base md:text-lg text-white/80 mb-10 max-w-lg leading-relaxed opacity-0 translate-y-5"
//               style={{
//                 animation: "fadeInUp 1s ease forwards",
//                 animationDelay: "0.6s",
//               }}
//             >
//               At Infosane Technology LLP, we are committed to excellence in everything we do.
//               From our rigorous quality standards to our dedication to continuous improvement,
//               we strive to exceed our clients' expectations and deliver exceptional value.
//             </p>

//             <div
//               className="flex flex-col sm:flex-row gap-4 justify-start opacity-0 translate-y-5"
//               style={{
//                 animation: "fadeInUp 1s ease forwards",
//                 animationDelay: "0.8s",
//               }}
//             >
//               <Button
//                 size="lg"
//                 onClick={() => scrollToSection("contact")}
//                 style={{
//                   backgroundColor: COLORS.BLUE_PRIMARY,
//                   color: "white",
//                 }}
//                 className="font-semibold text-base py-3 px-6 hover:opacity-90 transition-opacity rounded-md group lg:w-[35%]"
//               >
//                 Request a Consultation
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 onClick={() => scrollToSection("projects")}
//                 style={{
//                   borderColor: COLORS.BLUE_PRIMARY,
//                   color: COLORS.BLUE_PRIMARY,
//                   backgroundColor: COLORS.WHITE,
//                 }}
//                 className="font-semibold text-base py-3 px-6 border-2 hover:bg-primary/10 transition-colors rounded-md lg:w-[35%]"
//               >
//                 Explore Our Projects
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div
//           className="absolute bottom-6 left-6 z-20 opacity-0"
//           style={{
//             animation: "fadeIn 1s ease forwards",
//             animationDelay: "1s",
//           }}
//         >
//           <button
//             onClick={() => scrollToSection("techstack")}
//             className="p-3 rounded-full hover:bg-white/10 transition-colors"
//             aria-label="Scroll down"
//           >
//             <ChevronDown size={28} className="text-white/70 animate-bounce" />
//           </button>
//         </div>

//         {/* Styles */}
//         <style>{`
//           ${customKeyframes}
//           @media (min-width: 1024px) {
//             #hero {
//               clip-path: none !important;
//             }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// };

// export default Hero;
