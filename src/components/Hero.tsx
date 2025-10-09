import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Company Name */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wide">
              INFOSANE TECHNOLOGY LLP
            </span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up stagger-1">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Innovation Redefined
            </span>
            <br />
            <span className="text-navy">
              Delivering Tomorrow's Solutions Today
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            At Infosane Technology LLP, we are committed to excellence in everything we do. 
            From our rigorous quality standards to our dedication to continuous improvement, 
            we strive to exceed our clients' expectations and deliver exceptional value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up stagger-3">
            <Button
              size="xl"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hover group"
            >
              Request a Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Explore Our Projects
            </Button>
          </div>

          {/* Contact Snippet */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/70 animate-fade-in stagger-4">
            <a 
              href="tel:8989000400" 
              className="flex items-center gap-2 hover:text-primary transition-smooth group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-medium">8989000400</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <a 
              href="mailto:vivek.agrawal@infosane.co.in" 
              className="flex items-center gap-2 hover:text-primary transition-smooth group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                <Mail className="h-4 w-4" />
              </div>
              <span className="font-medium">vivek.agrawal@infosane.co.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        .bg-grid-white {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
