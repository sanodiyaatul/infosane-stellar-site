import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo-full.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const isHome = location.pathname === "/";

  const services = [
    { name: "Web Development", id: "services" },
    { name: "Cloud Solutions", id: "services" },
    { name: "Custom Software Development", id: "services" },
    { name: "Consulting & Strategy", id: "services" },
    { name: "Software Maintenance & Support", id: "services" },
  ];

  const technologies = [
    "JAVA", "REACT", "PHP", "AWS", "ANDROID", "NODE JS"
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center animate-fade-in">
            <img src={logo} alt="Infosane Technology" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation - Center */}
          {isHome && (
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
              {/* Services Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-2">
                          {services.map((service) => (
                            <NavigationMenuLink
                              key={service.name}
                              asChild
                            >
                              <button
                                onClick={() => scrollToSection(service.id)}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                              >
                                <div className="text-sm font-medium">{service.name}</div>
                              </button>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Projects Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10">
                      Projects
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] p-4">
                        <div className="grid gap-2">
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => scrollToSection("projects")}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left w-full"
                            >
                              <div className="text-sm font-medium">Our Projects</div>
                              <p className="text-sm text-muted-foreground mt-1">
                                View our portfolio of completed projects
                              </p>
                            </button>
                          </NavigationMenuLink>
                          <NavigationMenuLink asChild>
                            <a
                              href="https://solar.infosane.co.in"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                            >
                              <div className="text-sm font-medium">Products</div>
                              <p className="text-sm text-muted-foreground mt-1">
                                Solar Management System - Sign In
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Technology Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/10 data-[state=open]:bg-accent/10">
                      Technology
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[350px] p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {technologies.map((tech) => (
                            <NavigationMenuLink key={tech} asChild>
                              <button
                                onClick={() => scrollToSection("techstack")}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                              >
                                <div className="text-sm font-medium">{tech}</div>
                              </button>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          )}

          {/* Right Side - Contact & Careers */}
          <div className="hidden lg:flex items-center gap-4">
            {isHome ? (
              <>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Contact
                </button>
                <Link to="/careers">
                  <Button variant="outline" size="default" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Careers
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
                  Home
                </Link>
                <Link to="/careers">
                  <Button variant="outline" size="default" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Careers
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {isHome ? (
                <>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-foreground hover:text-primary transition-smooth font-medium text-left px-4 py-2"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-foreground hover:text-primary transition-smooth font-medium text-left px-4 py-2"
                  >
                    Projects
                  </button>
                  <a
                    href="https://solar.infosane.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-smooth font-medium text-left px-4 py-2"
                  >
                    Products (Solar)
                  </a>
                  <button
                    onClick={() => scrollToSection("techstack")}
                    className="text-foreground hover:text-primary transition-smooth font-medium text-left px-4 py-2"
                  >
                    Technology
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-foreground hover:text-primary transition-smooth font-medium text-left px-4 py-2"
                  >
                    Contact
                  </button>
                  <Link to="/careers" className="px-4">
                    <Button variant="outline" size="default" className="w-full border-primary text-primary">
                      Careers
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary transition-smooth font-medium px-4 py-2"
                  >
                    Home
                  </Link>
                  <Link to="/careers" className="px-4">
                    <Button variant="outline" size="default" className="w-full border-primary text-primary">
                      Careers
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
