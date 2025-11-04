import { Card } from "@/components/ui/card";
import { Smartphone, Palette, Globe, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using Flutter and Firebase with seamless AI integration for intelligent, user-focused experiences.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Modern, intuitive interface designs with comprehensive wireframing and prototyping using Figma. Creating responsive designs that users love.",
      color: "text-[hsl(190,80%,55%)]",
      bgColor: "bg-[hsl(190,80%,55%)]/10",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Responsive, modern websites using HTML, CSS, and JavaScript. Building fast, accessible web applications with clean code and best practices.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description:
        "Implementing cutting-edge AI features like chatbots, voice assistants, and intelligent automation to enhance application capabilities.",
      color: "text-[hsl(190,80%,55%)]",
      bgColor: "bg-[hsl(190,80%,55%)]/10",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Services <span className="gradient-text">Offered</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions for your digital product needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-accent/30 animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${service.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
