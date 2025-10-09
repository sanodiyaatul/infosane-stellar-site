import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Company Name */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-navy">
            Infosane Technology LLP
          </h2>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary">Innovation Redefined.</span>
            <br />
            <span className="text-navy">Delivering Tomorrow's Solutions Today.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            At Infosane Technology LLP, we are committed to excellence in everything we do. From our rigorous quality 
            standards to our dedication to continuous improvement, we strive to exceed our clients' expectations and 
            deliver exceptional value.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              Request a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("projects")}
            >
              Explore Our Projects
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <a
              href="tel:8989000400"
              className="flex items-center gap-2 hover:text-primary transition-smooth"
            >
              <Phone size={16} />
              <span>8989000400</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a
              href="mailto:vivek.agrawal@infosane.co.in"
              className="flex items-center gap-2 hover:text-primary transition-smooth"
            >
              <Mail size={16} />
              <span>vivek.agrawal@infosane.co.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
