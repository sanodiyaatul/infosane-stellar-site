// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown, Rocket, Code, Cloud, Users, Settings } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import logo from "@/assets/image.png";
// import * as React from "react";

// // Define the Technology data structure with descriptions
// const TECHNOLOGIES_DATA = [
//   { name: "JAVA", description: "Robust enterprise applications and backend systems." },
//   { name: "REACT", description: "Building modern, fast, and scalable user interfaces." },
//   { name: "PHP", description: "Efficient server-side scripting and web development." },
//   { name: "AWS", description: "Cloud infrastructure, serverless computing, and hosting." },
//   { name: "ANDROID", description: "Native mobile applications for the Android ecosystem." },
//   { name: "NODE JS", description: "High-performance, non-blocking server-side JavaScript." },
//   { name: "TypeScript", description: "Enhancing code quality with static typing." },
//   { name: "Python", description: "Data science, machine learning, and automation." },
// ];

// // --- Utility Component for Navigation Menu List Items ---
// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a"> & { onClick?: () => void; icon?: React.ReactNode }
// >(({ className, title, children, onClick, icon, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref} 
//           onClick={onClick}
//           className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
//           {...props}
//         >
//           <div className="flex items-start">
//             {icon && <span className="mr-3 mt-1 text-primary group-hover:text-primary transition-colors">{icon}</span>}
//             <div>
//               <div className="text-sm font-semibold leading-none">{title}</div>
//               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
//                 {children}
//               </p>
//             </div>
//           </div>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });

// ListItem.displayName = "ListItem"; 
// // -----------------------------------------------------------------

// // Tailwind class string for mobile navigation items
// const MOBILE_NAV_CLASS = "text-left py-2 px-4 font-medium transition-colors text-foreground hover:bg-accent hover:text-primary";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   // New state for hide/show logic
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isScrollingDown, setIsScrollingDown] = useState(false);
//   const [isBelowHero, setIsBelowHero] = useState(false);
  
//   // Header height is 64px (h-16)
//   const HEADER_HEIGHT = 64; 

//   // --- EFFECT FOR SCROLL BEHAVIOR ---
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const heroElement = document.getElementById('hero');
//       const heroHeight = heroElement ? heroElement.offsetHeight : window.innerHeight - HEADER_HEIGHT;
      
//       // 1. Determine if scrolling down
//       const scrollingDown = currentScrollY > lastScrollY && currentScrollY > HEADER_HEIGHT * 2;
//       setIsScrollingDown(scrollingDown);

//       // 2. Determine if we are past the Hero section
//       // We check if the scrollY is greater than the Hero section height.
//       setIsBelowHero(currentScrollY > heroHeight);

//       // 3. Simple scrolled indicator for background opacity (keeps the original functionality)
//       setIsScrolled(currentScrollY > 20);
      
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]); // Depend on lastScrollY to update logic

//   // --- SCROLL TO SECTION LOGIC ---
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const isHome = location.pathname === "/";

//   // Services array (kept for reference)
//   const services = [
//     { name: "Web Development", id: "services", description: "Modern, responsive websites and web applications.", icon: <Code size={18} /> },
//     { name: "Cloud Solutions", id: "services", description: "Scalable hosting and infrastructure management on AWS/Azure.", icon: <Cloud size={18} /> },
//     { name: "Custom Software", id: "services", description: "Tailored applications to automate and optimize business processes.", icon: <Rocket size={18} /> },
//     { name: "Consulting & Strategy", id: "services", description: "Expert guidance to shape your digital transformation journey.", icon: <Users size={18} /> },
//     { name: "Maintenance & Support", id: "services", description: "Reliable, ongoing technical support and application updates.", icon: <Settings size={18} /> },
//   ];

//   // --- CONDITIONAL STYLING FOR HIDE/SHOW ---
//   let hideClass = '';
  
//   // Hide if scrolling down AND past the hero section (and mobile menu is closed)
//   if (isScrollingDown && isBelowHero && !isMobileMenuOpen) {
//     hideClass = '-translate-y-full shadow-none';
//   } 
//   // Show if scrolling up OR we are still above/on the hero section
//   else if (!isScrollingDown && isBelowHero && !isMobileMenuOpen) {
//     hideClass = 'translate-y-0 shadow-md';
//   } else {
//     // Default state (above hero or mobile menu open)
//     hideClass = 'translate-y-0 shadow-md';
//   }

//   // --- RENDER ---
//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out 
//         ${isScrolled || !isHome || isMobileMenuOpen ? "bg-white shadow-md border-b border-border" : "bg-white/95 backdrop-blur-md"}
//         ${hideClass}
//       `}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo - Left */}
//           <Link to="/" className="flex items-center">
//             <img src={logo} alt="Infosane Technology" className="h-10 pl-5 w-auto" />
//           </Link>

//           {/* Desktop Navigation - Center */}
//           <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            
//             {/* Services Menu */}
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10 text-base font-medium">
//                     Services
//                   </NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                       {services.map((service) => (
//                         <ListItem
//                           key={service.name}
//                           title={service.name}
//                           onClick={() => isHome ? scrollToSection(service.id) : null}
//                           icon={service.icon}
//                         >
//                           {service.description}
//                         </ListItem>
//                       ))}
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>

//             {/* Projects/Products Menu */}
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10 text-base font-medium">
//                     Projects
//                   </NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid w-[300px] gap-2 p-4">
//                       <ListItem
//                         title="Our Projects"
//                         onClick={() => isHome ? scrollToSection("projects") : null}
//                       >
//                         View our portfolio of completed work and case studies.
//                       </ListItem>
//                       <ListItem
//                         title="Products"
//                         href="https://solar.infosane.co.in"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Solar Management System - Sign In
//                       </ListItem>
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>

//             {/* Technology Menu */}
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10 text-base font-medium">
//                     Technology
//                   </NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid w-[450px] gap-2 p-4 md:grid-cols-2">
//                       {TECHNOLOGIES_DATA.map((tech) => (
//                         <ListItem
//                           key={tech.name}
//                           title={tech.name}
//                           onClick={() => isHome ? scrollToSection("techstack") : null}
//                         >
//                           {tech.description}
//                         </ListItem>
//                       ))}
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
            
//             {/* Contact Link */}
//             {isHome && (
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="text-base font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
//               >
//                 Contact
//               </button>
//             )}
//           </nav>

//           {/* Right Side - Blogs & Careers CTA */}
//           <div className="flex items-center gap-4">
//             {/* Blogs Link */}
//             <Link to="/blogs" className="hidden lg:block text-base font-medium text-foreground hover:text-primary transition-colors">
//               Blogs
//             </Link>

//             {/* Careers Button - HIDDEN ON MOBILE */}
//             <div className="hidden lg:block">
//               <Link to="/careers">
//                 <Button size="default" className="text-white hover:opacity-90 transition-opacity" style={{backgroundColor: '#23A2D9'}}>
//                   Careers
//                 </Button>
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden p-2"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-border bg-background shadow-lg transition-all duration-300">
//             <nav className="flex flex-col gap-1">
//               {/* Home Page Links (Scroll-to-Section) */}
//               {isHome && (
//                 <>
//                   <button onClick={() => scrollToSection("services")} className={MOBILE_NAV_CLASS}>Services</button>
//                   <button onClick={() => scrollToSection("projects")} className={MOBILE_NAV_CLASS}>Projects</button>
//                   <a href="https://solar.infosane.co.in" target="_blank" rel="noopener noreferrer" className={MOBILE_NAV_CLASS}>Products (Solar)</a>
//                   <button onClick={() => scrollToSection("techstack")} className={MOBILE_NAV_CLASS}>Technology</button>
//                   <button onClick={() => scrollToSection("contact")} className={MOBILE_NAV_CLASS}>Contact</button>
//                 </>
//               )}
//               {/* Other Navigation Links */}
//               {!isHome && (
//                 <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={MOBILE_NAV_CLASS}>Home</Link>
//               )}
//               <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className={MOBILE_NAV_CLASS}>Blogs</Link>
              
//               <div className="px-4 mt-2">
//                 {/* Careers Button inside the mobile menu */}
//                 <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
//                   <Button variant="outline" size="default" className="w-full border-primary text-primary hover:bg-primary/10">
//                     Careers
//                   </Button>
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Rocket, Code, Cloud, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/image.png"; // Make sure this path is correct
import * as React from "react";

// --- BRAND COLORS ---
const BRAND_COLORS = {
    NAVY_DARK: "#103463",
    BLUE_PRIMARY: "#23A2D9",
    WHITE: "#FFFFFF",
    TEXT_ON_DARK: "#FFFFFF", // Explicitly white text for better contrast on dark
};

// --- Blog & Career Button Component ---
// --- Blog & Career Button Component ---
const BlogCareerButton = () => {
    const DARK_TEXT = BRAND_COLORS.NAVY_DARK; 

    // Function to handle the hover for an individual link
    const handleLinkHover = (e, isHovering, defaultBg, hoverBg, defaultText, hoverText) => {
        const target = e.currentTarget;
        if (isHovering) {
            target.style.backgroundColor = hoverBg;
            target.style.color = hoverText;
        } else {
            target.style.backgroundColor = defaultBg;
            target.style.color = defaultText;
        }
    };

    return (
        <div 
            className="hidden lg:flex relative h-9"
        >
            {/* BLOGS Link (Left Segment) */}
            <Link 
                to="/blogs" 
                className={`
                    flex items-center justify-center h-full py-2 px-6 text-base font-bold whitespace-nowrap 
                    rounded-l-full
                    transition-colors duration-300
                `}
                onMouseEnter={(e) => handleLinkHover(e, true, BRAND_COLORS.NAVY_DARK, BRAND_COLORS.BLUE_PRIMARY, BRAND_COLORS.TEXT_ON_DARK, DARK_TEXT)}
                onMouseLeave={(e) => handleLinkHover(e, false, BRAND_COLORS.NAVY_DARK, BRAND_COLORS.BLUE_PRIMARY, BRAND_COLORS.TEXT_ON_DARK, DARK_TEXT)}
                style={{ 
                    // Set default colors via inline style for guaranteed rendering
                    backgroundColor: BRAND_COLORS.NAVY_DARK,
                    color: BRAND_COLORS.TEXT_ON_DARK,
                }}
            >
                Blogs
            </Link>

            {/* CAREERS Link (Right Segment) */}
            <Link 
                to="/careers" 
                className={`
                    flex items-center justify-center h-full py-2 px-6 text-base font-bold whitespace-nowrap
                    transition-colors duration-300 rounded-r-full
                `}
                onMouseEnter={(e) => handleLinkHover(e, true, BRAND_COLORS.BLUE_PRIMARY, BRAND_COLORS.NAVY_DARK, DARK_TEXT, BRAND_COLORS.TEXT_ON_DARK)}
                onMouseLeave={(e) => handleLinkHover(e, false, BRAND_COLORS.BLUE_PRIMARY, BRAND_COLORS.NAVY_DARK, DARK_TEXT, BRAND_COLORS.TEXT_ON_DARK)}
                style={{
                    // Set default colors via inline style for guaranteed rendering
                    backgroundColor: BRAND_COLORS.BLUE_PRIMARY,
                    color: DARK_TEXT,
                }}
            >
                Careers
            </Link>

            {/* Vertical Separator Line */}
            <div 
                className="absolute inset-y-0 w-px z-20 pointer-events-none"
                style={{
                    backgroundColor: BRAND_COLORS.WHITE,
                    left: '50%',
                    transform: 'translateX(-0.5px)',
                }}
            />
        </div>
    );
};


// const BlogCareerButton = () => {
//     // Note: isHovered state and hover handlers are removed!

//     // The default colors are set directly in the className using arbitrary values.
//     // The hover state uses simple Tailwind hover utilities.

//     return (
//         <div 
//             // Use flex and h-10 to define shape/size
//             className="hidden lg:flex relative h-10"
//             // Handlers removed as they relied on state
//         >
//             {/* BLOGS Link (Left Segment) */}
//             <Link 
//                 to="/blogs" 
//                 className={`
//                     flex items-center justify-center h-full py-2 px-6 text-base font-bold whitespace-nowrap 
//                     rounded-l-full
//                     text-[${BRAND_COLORS.TEXT_ON_DARK}] 
//                     bg-[${BRAND_COLORS.NAVY_DARK}] 
//                     hover:bg-[${BRAND_COLORS.BLUE_PRIMARY}] 
//                     transition-colors duration-300
//                 `}
//             >
//                 Blogs
//             </Link>

//             {/* CAREERS Link (Right Segment) */}
//             <Link 
//                 to="/careers" 
//                 className={`
//                     flex items-center justify-center h-full py-2 px-6 text-base font-bold whitespace-nowrap
//                     text-[${BRAND_COLORS.TEXT_ON_DARK}] 
//                     bg-[${BRAND_COLORS.BLUE_PRIMARY}] 
//                     hover:bg-[${BRAND_COLORS.NAVY_DARK}] 
//                     transition-colors duration-300
//                 `}
//             >
//                 Careers
//             </Link>

//             {/* Vertical Separator Line */}
//             <div 
//                 className="absolute inset-y-0 w-px z-20 pointer-events-none"
//                 style={{
//                     backgroundColor: BRAND_COLORS.WHITE,
//                     left: '50%',
//                     transform: 'translateX(-0.5px)',
//                 }}
//             />
//         </div>
//     );
// };
// -----------------------------------------------------------------


// Define the Technology data structure with descriptions
const TECHNOLOGIES_DATA = [
  { name: "JAVA", description: "Robust enterprise applications and backend systems." },
  { name: "REACT", description: "Building modern, fast, and scalable user interfaces." },
  { name: "PHP", description: "Efficient server-side scripting and web development." },
  { name: "AWS", description: "Cloud infrastructure, serverless computing, and hosting." },
  { name: "ANDROID", description: "Native mobile applications for the Android ecosystem." },
  { name: "NODE JS", description: "High-performance, non-blocking server-side JavaScript." },
  { name: "TypeScript", description: "Enhancing code quality with static typing." },
  { name: "Python", description: "Data science, machine learning, and automation." },
];

// --- Utility Component for Navigation Menu List Items ---
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { onClick?: () => void; icon?: React.ReactNode }
>(({ className, title, children, onClick, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref} 
          onClick={onClick}
          className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
          {...props}
        >
          <div className="flex items-start">
            {icon && <span className="mr-3 mt-1 text-primary group-hover:text-primary transition-colors">{icon}</span>}
            <div>
              <div className="text-sm font-semibold leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem"; 
// -----------------------------------------------------------------

// Tailwind class string for mobile navigation items
const MOBILE_NAV_CLASS = "text-left py-2 px-4 font-medium transition-colors text-foreground hover:bg-accent hover:text-primary";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // New state for hide/show logic
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isBelowHero, setIsBelowHero] = useState(false);
  
  // Header height is 64px (h-16)
  const HEADER_HEIGHT = 64; 

  // --- EFFECT FOR SCROLL BEHAVIOR ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroElement = document.getElementById('hero');
      const heroHeight = heroElement ? heroElement.offsetHeight : window.innerHeight - HEADER_HEIGHT;
      
      const scrollingDown = currentScrollY > lastScrollY && currentScrollY > HEADER_HEIGHT * 2;
      setIsScrollingDown(scrollingDown);
      setIsBelowHero(currentScrollY > heroHeight);
      setIsScrolled(currentScrollY > 20);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); 

  // --- SCROLL TO SECTION LOGIC ---
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const isHome = location.pathname === "/";

  // Services array (kept for reference)
  const services = [
    { name: "Web Development", id: "services", description: "Modern, responsive websites and web applications.", icon: <Code size={18} /> },
    { name: "Cloud Solutions", id: "services", description: "Scalable hosting and infrastructure management on AWS/Azure.", icon: <Cloud size={18} /> },
    { name: "Custom Software", id: "services", description: "Tailored applications to automate and optimize business processes.", icon: <Rocket size={18} /> },
    { name: "Consulting & Strategy", id: "services", description: "Expert guidance to shape your digital transformation journey.", icon: <Users size={18} /> },
    { name: "Maintenance & Support", id: "services", description: "Reliable, ongoing technical support and application updates.", icon: <Settings size={18} /> },
  ];

  // --- CONDITIONAL STYLING FOR HIDE/SHOW ---
  let hideClass = '';
  
  if (isScrollingDown && isBelowHero && !isMobileMenuOpen) {
    hideClass = '-translate-y-full shadow-none';
  } 
  else if (!isScrollingDown && isBelowHero && !isMobileMenuOpen) {
    hideClass = 'translate-y-0 shadow-md';
  } else {
    hideClass = 'translate-y-0 shadow-md';
  }

  // --- RENDER ---
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-700 ease-in-out 
        ${isScrolled || !isHome || isMobileMenuOpen ? "bg-white shadow-md border-b border-border" : "bg-white/95 backdrop-blur-md"}
        ${hideClass}
      `}
    >
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center">
            {/* Adjusted image height and padding for the smaller h-16 header */}
            <img src={logo} alt="Infosane Technology" className="h-10 w-auto ml:0 lg:ml-10" />
          </Link>

          {/* Desktop Navigation - Center (unchanged) */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {/* ... Navigation Menus (Services, Projects, Technology) ... */}
            
            {/* Services Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10 text-base font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {services.map((service) => (
                        <ListItem
                          key={service.name}
                          title={service.name}
                          onClick={() => isHome ? scrollToSection(service.id) : null}
                          icon={service.icon}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Projects/Products Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10 text-base font-medium">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-2 p-4">
                      <ListItem
                        title="Our Projects"
                        onClick={() => isHome ? scrollToSection("projects") : null}
                      >
                        View our portfolio of completed work and case studies.
                      </ListItem>
                      <ListItem
                        title="Products"
                        href="https://infosane.co.in/solar/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Solar Management System - Sign In
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Technology Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10 text-base font-medium">
                    Technology
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[450px] gap-2 p-4 md:grid-cols-2">
                      {TECHNOLOGIES_DATA.map((tech) => (
                        <ListItem
                          key={tech.name}
                          title={tech.name}
                          onClick={() => isHome ? scrollToSection("techstack") : null}
                        >
                          {tech.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Contact Link */}
            {isHome && (
              <button
                onClick={() => scrollToSection("contact")}
                className="text-base font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md"
              >
                Contact
              </button>
            )}
          </nav>

          {/* Right Side - Blog & Careers Button (Desktop) */}
          <div className="flex items-center gap-4 mr:0 lg:mr-10">
            {/* Replaced individual Links with the custom segmented button component */}
            <BlogCareerButton /> {/* No need for props here as it just navigates */}

            {/* Mobile Menu Button (unchanged) */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (unchanged) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background shadow-lg transition-all duration-300">
            <nav className="flex flex-col gap-1">
              {/* Home Page Links (Scroll-to-Section) */}
              {isHome && (
                <>
                  <button onClick={() => scrollToSection("services")} className={MOBILE_NAV_CLASS}>Services</button>
                  <button onClick={() => scrollToSection("projects")} className={MOBILE_NAV_CLASS}>Projects</button>
                  <a href="https://solar.infosane.co.in" target="_blank" rel="noopener noreferrer" className={MOBILE_NAV_CLASS}>Products (Solar)</a>
                  <button onClick={() => scrollToSection("techstack")} className={MOBILE_NAV_CLASS}>Technology</button>
                  <button onClick={() => scrollToSection("contact")} className={MOBILE_NAV_CLASS}>Contact</button>
                </>
              )}
              {/* Other Navigation Links */}
              {!isHome && (
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={MOBILE_NAV_CLASS}>Home</Link>
              )}
              <Link to="/blogs" onClick={() => setIsMobileMenuOpen(false)} className={MOBILE_NAV_CLASS}>Blogs</Link>
              
              <div className="px-4 mt-2">
                {/* Careers Button inside the mobile menu */}
                <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="default" className="w-full border-primary text-primary hover:bg-primary/10">
                    Careers
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;