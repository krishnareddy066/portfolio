import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Palette, Globe, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Java", "C++", "Python", "SQL"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-[hsl(190,80%,55%)]",
      bgColor: "bg-[hsl(190,80%,55%)]/10",
      skills: ["Flutter", "Firebase", "Android Studio", "REST API"],
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design"],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "text-[hsl(190,80%,55%)]",
      bgColor: "bg-[hsl(190,80%,55%)]/10",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Web"],
    },
    {
      title: "Core Concepts",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["OOP", "DSA", "DBMS", "Computer Networks"],
    },
    {
      title: "Tools & Methods",
      icon: Wrench,
      color: "text-[hsl(190,80%,55%)]",
      bgColor: "bg-[hsl(190,80%,55%)]/10",
      skills: ["Git", "GitHub", "Tableau", "Agile/SDLC"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 hover:border-accent/30 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-foreground/80 hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
