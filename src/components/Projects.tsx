import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Activity, BarChart3, Building2, Sun } from "lucide-react";
import mobichikitsaImg from "@/assets/project-mobichikitsa.jpg";
import clideImg from "@/assets/project-clide.jpg";
import bankAuditImg from "@/assets/project-bank-audit.jpg";
import solarImg from "@/assets/project-solar.jpg";

interface Project {
  id: number;
  title: string;
  summary: string;
  fullDetail: string;
  keyFeatures: string[];
  additionalInfo?: string[];
  icon: React.ReactNode;
  image: string;
  color: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Mobichikitsa",
      summary: "Innovative healthcare application for remote consultations and real-time patient monitoring.",
      fullDetail: "Developed in-house to provide accessible and efficient healthcare through cutting-edge IoT devices for real-time health monitoring.",
      keyFeatures: [
        "Remote doctor consultations",
        "Health monitoring and management",
        "Access to medical records",
        "Over 100 tests on a single platform",
        "Faster CBC results",
        "Direct report generation",
        "Cost-effective services",
        "Digital prescriptions with QR",
        "Medicines from Vending machines",
        "Multiple Client/Role Management",
        "Data Analysis",
        "In-hospital appointment management"
      ],
      additionalInfo: [
        "Integration: Integrates cutting-edge IoT devices for real-time health monitoring (Height, Weight, Temperature, Oxygen, BP, ECG, Digital stethoscope, Blood analysis).",
        "Compliance: Integrated with ABHA (Ayushman Bharat Health Account) for secure uploading and management of patient medical records."
      ],
      icon: <Activity className="h-6 w-6" />,
      image: mobichikitsaImg,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "CLIDE Analytics",
      summary: "AI-powered platform for enterprise data unification, advanced visualization, and smart forecasting.",
      fullDetail: "Enables businesses to make data-driven decisions by unifying business data from various sites and departments.",
      keyFeatures: [
        "Data Integration",
        "Enterprise Data Unification",
        "Advanced Visualization (including interactive maps)",
        "In-Depth Drill-down Analysis",
        "Prebuilt Analytical Functions",
        "Collaboration/Sharing",
        "Smart Forecasting & Real-Time Alerts"
      ],
      additionalInfo: [
        "AI Components: Includes functionality for Mass Detection (monitoring crowds, tracking vehicle movement) and Object Detection (real-time identification/classification for security, industrial automation, and healthcare) using deep learning.",
        "Safety Measures: Strict adherence to data privacy, redundancy systems, continuous accuracy checks, ethical guidelines, and maintaining human oversight."
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      image: clideImg,
      color: "from-primary to-accent"
    },
    {
      id: 3,
      title: "Bank Audit",
      summary: "Cloud-based solution transforming the bank audit process for speed and accuracy.",
      fullDetail: "Revolutionizes the audit process through innovative cloud-based solutions for faster, more accurate, and highly efficient audits.",
      keyFeatures: [
        "Automated Audit Processes",
        "Real-Time Collaboration",
        "Fast & Accurate Report Generation",
        "Seamless Data Handling",
        "Comprehensive Audit Coverage"
      ],
      additionalInfo: [
        "Annexure Issue Management: Addresses branch operations and premises security, computer software and system checks, cash management, ATM verification, BRS, and signature scanning for compliance."
      ],
      icon: <Building2 className="h-6 w-6" />,
      image: bankAuditImg,
      color: "from-navy to-primary"
    },
    {
      id: 4,
      title: "Solar Management Software",
      summary: "All-in-one platform for solar vendors, EPC companies, and installers.",
      fullDetail: "Provides a platform for managing documentation, approvals, and day-to-day operations—from quotation to billing, reporting, and project handover.",
      keyFeatures: [
        "Attachments Management: Secure, centralized storage",
        "Inventory Management: Track stock-in/out, manage bills, generate purchase orders, automated reports",
        "Party & Accounts Management: Party creation, ledger reports, payment tracking, detailed reports",
        "Reporting Dashboard: Inventory, party ledger, stock, and consumer-based performance tracking",
        "Master Management: Manage city, state, district, user, unit, and item masters",
        "Consumer Management: Detailed consumer data, earthing/protection, module type, system phase tracking",
        "Quotation Management: Quick and accurate quotation generation, component-level tracking, auto cost calculation, streamlined approvals, and reduced errors"
      ],
      icon: <Sun className="h-6 w-6" />,
      image: solarImg,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming industries through innovative solutions and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`cursor-pointer hover-lift border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden group animate-fade-in-up stagger-${index + 1}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute top-4 left-4 p-3 rounded-full bg-background/90 backdrop-blur-sm text-primary shadow-lg">
                  {project.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-primary text-primary">
                  View Details →
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <div className="relative h-64 -mt-6 -mx-6 mb-6 overflow-hidden rounded-t-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-30`} />
                <div className="absolute bottom-4 left-6 p-4 rounded-full bg-background/90 backdrop-blur-sm text-primary shadow-lg">
                  {selectedProject.icon}
                </div>
              </div>
              
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-navy">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/80 mt-2">
                  {selectedProject.fullDetail}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-navy flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-primary" />
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.additionalInfo && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-navy flex items-center gap-2">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      Additional Information
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.additionalInfo.map((info, index) => (
                        <li key={index} className="text-foreground/80 leading-relaxed">
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
