import { Database, Code2, Server, Cloud, Smartphone, Cpu } from "lucide-react";

const technologies = [
  { name: "JAVA", icon: Cpu },
  { name: "REACT", icon: Code2 },
  { name: "PHP", icon: Server },
  { name: "AWS", icon: Cloud },
  { name: "ANDROID", icon: Smartphone },
  { name: "NODE JS", icon: Database },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-navy">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build robust solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-card hover:shadow-hover transition-smooth group"
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <tech.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-semibold text-navy text-center">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
