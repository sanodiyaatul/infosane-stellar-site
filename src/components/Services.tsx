import { Code, Cloud, Settings, MessageSquare, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Cutting-edge web applications built with modern technologies, optimized for performance and user experience.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services leveraging AWS, Azure, and other leading platforms.",
  },
  {
    icon: Settings,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business requirements and drive growth.",
  },
  {
    icon: MessageSquare,
    title: "Consulting & Strategy",
    description: "Expert technology consulting to guide your digital transformation and strategic initiatives.",
  },
  {
    icon: Wrench,
    title: "Software Maintenance & Support",
    description: "Comprehensive maintenance and support services ensuring your systems run smoothly 24/7.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-hover transition-smooth border-none bg-background"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
