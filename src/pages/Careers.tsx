import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Target, Lightbulb, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface JobPosition {
  title: string;
  description: string;
  department: string;
}

const jobPositions: JobPosition[] = [
  {
    title: "Senior Software Developer",
    description: "Lead development of scalable web applications using modern frameworks. 5+ years experience in React, Node.js, and cloud technologies required.",
    department: "Engineering",
  },
  {
    title: "Cloud Architect",
    description: "Design and implement cloud infrastructure solutions. AWS/Azure certification and experience with microservices architecture preferred.",
    department: "Cloud Solutions",
  },
  {
    title: "UX Designer",
    description: "Create intuitive user experiences for enterprise applications. Portfolio demonstrating user-centered design approach required.",
    department: "Design",
  },
  {
    title: "DevOps Engineer",
    description: "Build and maintain CI/CD pipelines, automate infrastructure. Experience with Kubernetes, Docker, and infrastructure-as-code required.",
    department: "Operations",
  },
];

const benefits = [
  "Competitive salary and performance bonuses",
  "Health insurance and wellness programs",
  "Flexible work arrangements and remote options",
  "Professional development and training opportunities",
  "Collaborative and innovative work environment",
  "Latest technology and tools",
];

const cultureValues = [
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We invest in our team's growth through training, conferences, and knowledge sharing.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with talented professionals in a supportive, team-oriented atmosphere.",
  },
  {
    icon: Target,
    title: "Client-Centricity",
    description: "We focus on delivering exceptional value and building lasting partnerships.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We believe in sustainable productivity and supporting our team's well-being.",
  },
];

const Careers = () => {
  const [openPositions, setOpenPositions] = useState<number[]>([]);

  const togglePosition = (index: number) => {
    setOpenPositions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy via-primary to-navy overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDR2NGgtNHptMCA4aDR2NGgtNHptMCA4aDR2NGgtNHptLTggMGg0djRoLTR6bTggOGg0djRoLTR6bS04IDBoNHY0aC00em0tOCAwaDR2NGgtNHptOC04aDR2NGgtNHptLTggMGg0djRoLTR6bTgtOGg0djRoLTR6bS04IDBoNHY0aC00em04LThoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the Infosane Team:<br />Innovate Your Future
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Be part of a team that's shaping the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">Our Culture</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Values that drive us forward every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {cultureValues.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth border-none text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities to grow your career with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {jobPositions.map((job, index) => (
              <Collapsible
                key={index}
                open={openPositions.includes(index)}
                onOpenChange={() => togglePosition(index)}
              >
                <Card className="shadow-card hover:shadow-hover transition-smooth border-none">
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="flex flex-row items-center justify-between p-6">
                      <div className="text-left">
                        <CardTitle className="text-xl text-navy mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-sm">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {job.department}
                          </span>
                        </CardDescription>
                      </div>
                      <div>
                        {openPositions.includes(index) ? (
                          <ChevronUp className="w-6 h-6 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      <a href="mailto:vivek.agrawal@infosane.co.in?subject=Application for Senior Software Developer">
                        <Button variant="hero" size="lg">
                          Apply Now
                        </Button>
                      </a>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">Employee Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in our team's success and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-secondary rounded-xl shadow-card hover:shadow-hover transition-smooth"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">✓</span>
                </div>
                <p className="text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
