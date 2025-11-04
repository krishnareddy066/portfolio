import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Prakriti – Virtual Herbal Garden",
      description:
        "Built a virtual herbal garden app featuring 3D medicinal plant models, AI-powered chatbot using Gemini API, and voice assistant for plant information. Provides comprehensive plant details including medicinal uses and cultivation tips.",
      tech: ["Flutter", "Firebase", "Gemini API", "3D Models", "Voice Assistant"],
      achievement: "1st Prize - Innovative Project Expo 2024",
      github: "https://github.com/krishnareddy066",
      gradient: "from-accent to-[hsl(190,80%,55%)]",
    },
    {
      title: "Voice Rails – Multilingual Railway Announcements",
      description:
        "Developed a multilingual railway announcement system featuring real-time Text-to-Speech in multiple Indian languages. Integrated Firebase backend for real-time train data and automated platform announcements.",
      tech: ["Java", "Firebase", "TTS", "Real-time DB", "Android Studio"],
      achievement: "1st Prize - Innovative Project Expo 2024",
      github: "https://github.com/krishnareddy066",
      gradient: "from-[hsl(190,80%,55%)] to-accent",
    },
    {
      title: "YouTube Clone",
      description:
        "Created a fully responsive YouTube clone web application with modern UI, video playback functionality, search features, and responsive grid layouts. Demonstrates strong HTML, CSS, and JavaScript skills.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/krishnareddy066",
      gradient: "from-accent/80 to-[hsl(190,80%,55%)]/80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Award-winning applications that showcase innovation and technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-accent/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6 space-y-4">
                {project.achievement && (
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <Award className="w-4 h-4" />
                    {project.achievement}
                  </div>
                )}

                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="https://github.com/krishnareddy066" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
