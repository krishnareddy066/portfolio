import { Card } from "@/components/ui/card";
import { Trophy, Award, Users, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Prize Winner (2 Years)",
      description: "Innovative Project Expo 2023 & 2024",
      details: "Prakriti & Voice Rails projects",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Award,
      title: "Top 30 Finalist",
      description: "NxtWave NSDC Program",
      details: "Selected from 500+ participants",
      color: "text-[hsl(190,80%,55%)]",
      bgColor: "bg-[hsl(190,80%,55%)]/10",
    },
    {
      icon: Users,
      title: "National Hackathons",
      description: "Multiple Participations",
      details: "AI, Sustainability & Android Innovation",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Code,
      title: "Premium Certifications",
      description: "IIT NPTEL & Cisco Certified",
      details: "DSA, Python, C, Modern AI",
      color: "text-[hsl(190,80%,55%)]",
      bgColor: "bg-[hsl(190,80%,55%)]/10",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized for innovation, technical excellence, and dedication
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-accent/30 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${achievement.bgColor} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <Icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground font-medium mb-1">
                  {achievement.description}
                </p>
                <p className="text-sm text-muted-foreground/80">{achievement.details}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
