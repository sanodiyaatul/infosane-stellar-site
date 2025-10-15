import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 80px)' }}>
    <Hero />
  </div>
        {/* <Hero /> */}
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


// import React from "react";
// import { useInView } from "react-intersection-observer";
// import GlobalBackground from "@/components/GlobalBackground";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Services from "@/components/Services";
// import Projects from "@/components/Projects";
// import TechStack from "@/components/TechStack";
// import Contact from "@/components/Contact";
// import heroBgImage from "@/assets/image.png";
// import techStackVideo from "@/assets/infinit.mp4";

// const Index = () => {
//   // Each ref must be attached to the top of the respective section. 
//   const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.6 });
//   const { ref: techRef, inView: techInView } = useInView({ threshold: 0.45 });

//   // Decide which background to show
//   let bgType = null;
//   if (heroInView) bgType = "hero";
//   else if (techInView) bgType = "techstack";

//   return (
//     <div className="min-h-screen">
//       {/* Fixed, portal-style background that switches smoothly */}
//       <GlobalBackground
//         type={bgType}
//         heroImage={heroBgImage}
//         videoSrc={techStackVideo}
//       />
//       <Header />
//       <main>
//         <div ref={heroRef}><Hero /></div>
//         <Services />
//         <Projects />
//         <div ref={techRef}><TechStack /></div>
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;



// import React from "react";
// import { useInView } from "react-intersection-observer";
// import GlobalBackground from "@/components/GlobalBackground";
// import heroBgImage from "@/assets/hero-bg.jpg";
// import techStackVideo from "@/assets/infinit.mp4";

// In Index component:
// const Index = () => {
//   const { ref: heroRef, entry: heroEntry } = useInView({
//     threshold: [0, 0.2, 0.5, 1],
//   });
//   const { ref: techRef, entry: techEntry } = useInView({
//     threshold: [0, 0.01, 0.25, 0.5, 0.75, 1],
//   });

//   const heroRatio = heroEntry?.intersectionRatio ?? 0;
//   const techRatio = techEntry?.intersectionRatio ?? 0;

//   const heroOpacity = heroRatio > 0.2 ? 1 : 0;
//   const techOpacity = techRatio;

//   // Pass opacity values to background component to fade in/out accordingly

//   return (
//     <>
//       <GlobalBackground
//         heroImage={heroBgImage}
//         heroOpacity={heroOpacity}
//         techStackVideo={techStackVideo}
//         techOpacity={techOpacity}
//       />
//       <Header />
//       <main>
//         <section ref={heroRef}>
//           <Hero />
//         </section>
//         <Services />
//         <Projects />
//         <section ref={techRef}>
//           <TechStack />
//         </section>
//         <Contact />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Index;