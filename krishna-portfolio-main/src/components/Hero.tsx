import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(190,80%,55%)]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Floating lines */}
        <svg className="absolute top-1/4 right-1/4 w-64 h-64 opacity-20 animate-slide-in-right" viewBox="0 0 200 200">
          <line x1="20" y1="20" x2="180" y2="60" stroke="hsl(240, 80%, 62%)" strokeWidth="2" />
          <line x1="40" y1="100" x2="160" y2="140" stroke="hsl(190, 80%, 55%)" strokeWidth="2" />
        </svg>
        
        {/* Floating dots */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-accent rounded-full animate-fade-in" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-[hsl(190,80%,55%)] rounded-full animate-fade-in delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-fade-in delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-medium text-sm">Mobile App Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Building digital products,{" "}
              <span className="gradient-text">experiences.</span>
            </h1>

            <div className="space-y-2 text-lg text-muted-foreground">
              <p className="font-medium text-foreground">
                <span className="font-semibold">Krishna Reddy</span> | Final Year CSE Student
              </p>
              <p>
                I specialize in <span className="text-accent font-medium">Flutter</span>,{" "}
                <span className="text-accent font-medium">Firebase</span>, UI/UX Design,
                and building intelligent, user-focused applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-[hsl(240,80%,62%)] to-[hsl(190,80%,55%)] hover:opacity-90 transition-opacity group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/krishnareddy066"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/katkarlakrishnareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:srikrishnareddy1234@gmail.com"
                className="p-2 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-[hsl(190,80%,55%)] blur-2xl opacity-20 animate-glow" />
              <div className="relative overflow-hidden border-4 border-accent/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Krishna Reddy - Mobile App Developer"
                  className="w-full max-w-md lg:max-w-lg object-cover aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default Hero;
