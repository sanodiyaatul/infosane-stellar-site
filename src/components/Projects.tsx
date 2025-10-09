import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  summary: string;
  fullDetail: string;
  features: string[];
  additionalInfo?: string[];
}

const projects: Project[] = [
  {
    title: "Mobichikitsa",
    summary: "Innovative healthcare application for remote consultations and real-time patient monitoring.",
    fullDetail: "Developed in-house to provide accessible and efficient healthcare.",
    features: [
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
      "In-hospital appointment management",
    ],
    additionalInfo: [
      "Integration: Integrates cutting-edge IoT devices for real-time health monitoring (Height, Weight, Temperature, Oxygen, BP, ECG, Digital stethoscope, Blood analysis).",
      "Compliance: Integrated with ABHA (Ayushman Bharat Health Account) for secure uploading and management of patient medical records.",
    ],
  },
  {
    title: "CLIDE Analytics",
    summary: "AI-powered platform for enterprise data unification, advanced visualization, and smart forecasting.",
    fullDetail: "Enables businesses to make data-driven decisions by unifying business data from various sites and departments.",
    features: [
      "Data Integration",
      "Enterprise Data Unification",
      "Advanced Visualization (including interactive maps)",
      "In-Depth Drill-down Analysis",
      "Prebuilt Analytical Functions",
      "Collaboration/Sharing",
      "Smart Forecasting & Real-Time Alerts",
    ],
    additionalInfo: [
      "AI Components: Includes functionality for Mass Detection (monitoring crowds, tracking vehicle movement) and Object Detection (real-time identification/classification for security, industrial automation, and healthcare) using deep learning.",
      "Safety Measures: Strict adherence to data privacy, redundancy systems, continuous accuracy checks, ethical guidelines, and maintaining human oversight.",
    ],
  },
  {
    title: "Bank Audit",
    summary: "Cloud-based solution transforming the bank audit process for speed and accuracy.",
    fullDetail: "Revolutionizes the audit process through innovative cloud-based solutions for faster, more accurate, and highly efficient audits.",
    features: [
      "Automated Audit Processes",
      "Real-Time Collaboration",
      "Fast & Accurate Report Generation",
      "Seamless Data Handling",
      "Comprehensive Audit Coverage",
    ],
    additionalInfo: [
      "Annexure Issue Management (Critical Components): Addresses branch operations and premises security, computer software and system checks, cash management, ATM verification, BRS, and signature scanning for compliance.",
    ],
  },
  {
    title: "Solar Management Software",
    summary: "All-in-one platform for solar vendors, EPC companies, and installers.",
    fullDetail: "Provides a platform for managing documentation, approvals, and day-to-day operations—from quotation to billing, reporting, and project handover.",
    features: [
      "Attachments Management: Secure, centralized storage",
      "Inventory Management: Track stock-in/out, manage bills, generate purchase orders, automated reports",
      "Party & Accounts Management: Party creation, ledger reports, payment tracking, detailed reports",
      "Reporting Dashboard: Inventory, party ledger, stock, and consumer-based performance tracking",
      "Master Management: Manage city, state, district, user, unit, and item masters",
      "Consumer Management: Detailed consumer data, earthing/protection, module type, system phase tracking",
      "Quotation Management: Quick and accurate quotation generation, component-level tracking, auto cost calculation, streamlined approvals, and reduced errors",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformative solutions delivered to leading organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-hover transition-smooth cursor-pointer border-none bg-gradient-to-br from-background to-secondary group"
              onClick={() => setSelectedProject(project)}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 text-navy group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.summary}
                    </p>
                    <p className="text-primary text-sm mt-4 font-medium">
                      Click to learn more →
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl text-navy mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.fullDetail}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-navy">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-1 shrink-0">
                            ✓
                          </Badge>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedProject.additionalInfo && (
                    <div>
                      <h4 className="text-xl font-semibold mb-4 text-navy">Additional Information</h4>
                      <div className="space-y-3">
                        {selectedProject.additionalInfo.map((info, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                            {info}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
