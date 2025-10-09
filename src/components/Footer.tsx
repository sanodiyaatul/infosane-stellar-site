import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-full.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Infosane Technology" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-navy-foreground/80 mb-4">
              Innovation Redefined. Delivering Tomorrow's Solutions Today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-smooth">
                  Projects
                </a>
              </li>
              <li>
                <a href="/careers" className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-navy-foreground/80 hover:text-navy-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-navy-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-navy-foreground/80">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>506 A-wing, 5th floor Keshav Imperial, Shani Mandir Road, Sitabuldi, Nagpur (MH), 440012</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-foreground/80">
                <Phone size={18} className="shrink-0" />
                <a href="tel:8989000400" className="hover:text-navy-foreground transition-smooth">
                  8989000400
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-foreground/80">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:vivek.agrawal@infosane.co.in" className="hover:text-navy-foreground transition-smooth">
                  vivek.agrawal@infosane.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/20 pt-8 text-center">
          <p className="text-sm text-navy-foreground/80">
            © {new Date().getFullYear()} Infosane Technology LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
